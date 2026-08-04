import { getStore } from '@netlify/blobs';

// Netlify Function: CRUD for the schools list, backed by Netlify Blobs.
// Protected by the same DASHBOARD_PASSWORD used for the submissions dashboard.
// Netlify Blobs works automatically here without extra config or env vars
// when the function runs on Netlify's own infrastructure.

const checkPassword = (password) =>
  Boolean(password) && password === process.env.DASHBOARD_PASSWORD;

const STORE_NAME = 'schools';
const KEY = 'list';

export const handler = async (event) => {
  const store = getStore(STORE_NAME);

  if (event.httpMethod === 'GET') {
    const password = event.queryStringParameters?.password;
    if (!checkPassword(password)) {
      return { statusCode: 401, body: JSON.stringify({ error: 'Onjuist wachtwoord' }) };
    }
    const schools = (await store.get(KEY, { type: 'json' })) || [];
    return { statusCode: 200, body: JSON.stringify({ schools }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Ongeldig verzoek' }) };
  }

  if (!checkPassword(body.password)) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Onjuist wachtwoord' }) };
  }

  const current = (await store.get(KEY, { type: 'json' })) || [];

  if (event.httpMethod === 'POST') {
    const { school } = body;
    if (!school || !school.name || !String(school.name).trim()) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Schoolnaam is verplicht' }) };
    }

    let updated;
    if (school.id) {
      const idx = current.findIndex((s) => s.id === school.id);
      if (idx >= 0) {
        const merged = { ...current[idx], ...school, updatedAt: new Date().toISOString() };
        updated = [...current];
        updated[idx] = merged;
      } else {
        updated = [
          ...current,
          { ...school, createdAt: new Date().toISOString() },
        ];
      }
    } else {
      const newSchool = {
        ...school,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      updated = [...current, newSchool];
    }

    await store.setJSON(KEY, updated);
    return { statusCode: 200, body: JSON.stringify({ schools: updated }) };
  }

  if (event.httpMethod === 'DELETE') {
    const { id } = body;
    if (!id) {
      return { statusCode: 400, body: JSON.stringify({ error: 'ID ontbreekt' }) };
    }
    const updated = current.filter((s) => s.id !== id);
    await store.setJSON(KEY, updated);
    return { statusCode: 200, body: JSON.stringify({ schools: updated }) };
  }

  return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
};
