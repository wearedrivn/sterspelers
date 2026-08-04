import React, { useState } from 'react';
import { Lock, LogOut, RefreshCcw, Inbox } from 'lucide-react';
import { DashboardSchools } from './DashboardSchools';

interface Submission {
  id: string;
  created_at: string;
  data: Record<string, string>;
}

export const Dashboard: React.FC = () => {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'aanvragen' | 'scholen'>('aanvragen');

  const fetchSubmissions = async (pw: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/.netlify/functions/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Er ging iets mis.');
      }
      setSubmissions(data.submissions || []);
      setAuthed(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Er ging iets mis.');
      setAuthed(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchSubmissions(password);
  };

  const handleLogout = () => {
    setAuthed(false);
    setPassword('');
    setSubmissions([]);
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm space-y-5 border border-slate-200"
        >
          <div className="w-12 h-12 rounded-full bg-[#0F172A] text-white flex items-center justify-center">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-black text-[#0F172A]">Sterspelers Dashboard</h1>
            <p className="text-sm text-slate-500">Voer het wachtwoord in om aanvragen te bekijken.</p>
          </div>
          <input
            type="password"
            placeholder="Wachtwoord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
          />
          {error && <p className="text-sm text-red-600 font-medium">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#0F172A] text-white font-bold text-sm hover:bg-slate-800 transition-colors disabled:opacity-60"
          >
            {loading ? 'Bezig...' : 'Inloggen'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-black text-[#0F172A]">Sterspelers Dashboard</h1>
            <p className="text-sm text-slate-500">
              {activeTab === 'aanvragen'
                ? `${submissions.length} aanvraag(en) ontvangen`
                : 'Overzicht van scholen, begeleiders en notities'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {activeTab === 'aanvragen' && (
              <button
                onClick={() => fetchSubmissions(password)}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-60"
              >
                <RefreshCcw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Vernieuwen
              </button>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0F172A] text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Uitloggen
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('aanvragen')}
            className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'aanvragen'
                ? 'border-[#0F172A] text-[#0F172A]'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Aanvragen
          </button>
          <button
            onClick={() => setActiveTab('scholen')}
            className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'scholen'
                ? 'border-[#0F172A] text-[#0F172A]'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Scholen
          </button>
        </div>

        {activeTab === 'scholen' ? (
          <DashboardSchools password={password} />
        ) : submissions.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-16 text-center text-slate-500 flex flex-col items-center gap-3">
            <Inbox className="w-8 h-8 text-slate-300" />
            <p className="text-sm">Nog geen aanvragen binnengekomen.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4 text-left">Datum</th>
                  <th className="p-4 text-left">Naam</th>
                  <th className="p-4 text-left">E-mail</th>
                  <th className="p-4 text-left">Telefoon</th>
                  <th className="p-4 text-left">School</th>
                  <th className="p-4 text-left">Plaats</th>
                  <th className="p-4 text-left">Rol</th>
                  <th className="p-4 text-left">Dienst</th>
                  <th className="p-4 text-left">Notities</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s) => (
                  <tr key={s.id} className="border-t border-slate-100 hover:bg-slate-50">
                    <td className="p-4 whitespace-nowrap text-slate-500">
                      {new Date(s.created_at).toLocaleString('nl-NL')}
                    </td>
                    <td className="p-4 font-semibold text-[#0F172A]">{s.data.name}</td>
                    <td className="p-4">{s.data.email}</td>
                    <td className="p-4">{s.data.phone}</td>
                    <td className="p-4">{s.data.schoolName}</td>
                    <td className="p-4">{s.data.city}</td>
                    <td className="p-4">{s.data.role}</td>
                    <td className="p-4">{s.data.servicePreference}</td>
                    <td className="p-4 max-w-xs truncate" title={s.data.notes}>
                      {s.data.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
