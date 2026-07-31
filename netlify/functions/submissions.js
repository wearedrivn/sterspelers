// Netlify Function: returns contact form submissions after checking a password.
// Requires these environment variables to be set in Netlify (Site configuration
// -> Environment variables):
//   DASHBOARD_PASSWORD   - the password visitors must enter to view the dashboard
//   NETLIFY_API_TOKEN    - a Netlify personal access token (User settings ->
//                          Applications -> Personal access tokens -> New access token)
//   NETLIFY_SITE_ID_ENV  - this site's Site ID (Project configuration -> General
//                          -> Project details -> Project ID)
//
// None of these are ever sent to the browser; only this server-side function
// can read them.

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let password;
  try {
    ({ password } = JSON.parse(event.body || '{}'));
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Ongeldig verzoek' }) };
  }

  const expectedPassword = process.env.DASHBOARD_PASSWORD;
  if (!expectedPassword) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'DASHBOARD_PASSWORD is niet ingesteld in Netlify.' }),
    };
  }

  if (!password || password !== expectedPassword) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Onjuist wachtwoord' }) };
  }

  const token = process.env.NETLIFY_API_TOKEN;
  const siteId = process.env.NETLIFY_SITE_ID_ENV;

  if (!token || !siteId) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'NETLIFY_API_TOKEN of NETLIFY_SITE_ID_ENV ontbreekt in Netlify.',
      }),
    };
  }

  try {
    const formsRes = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}/forms`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!formsRes.ok) {
      throw new Error(`Kon formulieren niet ophalen (status ${formsRes.status})`);
    }
    const forms = await formsRes.json();
    const contactForm = forms.find((f) => f.name === 'contact');

    if (!contactForm) {
      return { statusCode: 200, body: JSON.stringify({ submissions: [] }) };
    }

    const subsRes = await fetch(
      `https://api.netlify.com/api/v1/forms/${contactForm.id}/submissions`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    if (!subsRes.ok) {
      throw new Error(`Kon inzendingen niet ophalen (status ${subsRes.status})`);
    }
    const submissions = await subsRes.json();

    const cleaned = submissions
      .map((s) => ({
        id: s.id,
        created_at: s.created_at,
        data: s.data,
      }))
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    return { statusCode: 200, body: JSON.stringify({ submissions: cleaned }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
