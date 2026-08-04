import React, { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, X, School, RefreshCcw } from 'lucide-react';

interface SchoolRecord {
  id: string;
  name: string;
  city?: string;
  contactPerson?: string;
  begeleiders?: string;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

const emptyForm: Omit<SchoolRecord, 'id'> = {
  name: '',
  city: '',
  contactPerson: '',
  begeleiders: '',
  notes: '',
};

interface DashboardSchoolsProps {
  password: string;
}

export const DashboardSchools: React.FC<DashboardSchoolsProps> = ({ password }) => {
  const [schools, setSchools] = useState<SchoolRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const fetchSchools = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        `/.netlify/functions/schools?password=${encodeURIComponent(password)}`,
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Er ging iets mis.');
      setSchools(data.schools || []);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Er ging iets mis.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchools();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openNewForm = () => {
    setEditingId(null);
    setForm(emptyForm);
    setFormOpen(true);
  };

  const openEditForm = (school: SchoolRecord) => {
    setEditingId(school.id);
    setForm({
      name: school.name || '',
      city: school.city || '',
      contactPerson: school.contactPerson || '',
      begeleiders: school.begeleiders || '',
      notes: school.notes || '',
    });
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError('Schoolnaam is verplicht.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      const res = await fetch('/.netlify/functions/schools', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password,
          school: editingId ? { ...form, id: editingId } : form,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Er ging iets mis.');
      setSchools(data.schools || []);
      closeForm();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Er ging iets mis.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Deze school verwijderen?')) return;
    setError('');
    try {
      const res = await fetch('/.netlify/functions/schools', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Er ging iets mis.');
      setSchools(data.schools || []);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Er ging iets mis.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-black text-[#0F172A]">Scholen</h2>
          <p className="text-sm text-slate-500">{schools.length} school/scholen</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={fetchSchools}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-60"
          >
            <RefreshCcw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Vernieuwen
          </button>
          <button
            onClick={openNewForm}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0F172A] text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            <Plus className="w-4 h-4" />
            School toevoegen
          </button>
        </div>
      </div>

      {error && !formOpen && <p className="text-sm text-red-600 font-medium">{error}</p>}

      {formOpen && (
        <form
          onSubmit={handleSave}
          className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-[#0F172A]">
              {editingId ? 'School bewerken' : 'Nieuwe school'}
            </h3>
            <button
              type="button"
              onClick={closeForm}
              className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Schoolnaam *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Basisschool De Zevenster"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Plaats</label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                placeholder="Utrecht"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Contactpersoon</label>
              <input
                type="text"
                value={form.contactPerson}
                onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                placeholder="Naam directeur/contact"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Begeleider(s)</label>
              <input
                type="text"
                value={form.begeleiders}
                onChange={(e) => setForm({ ...form, begeleiders: e.target.value })}
                placeholder="bijv. Sanne, Kevin"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">
              Opmerkingen / bijzonderheden
            </label>
            <textarea
              rows={3}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Bijzonderheden over deze school..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
            />
          </div>

          {error && <p className="text-sm text-red-600 font-medium">{error}</p>}

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={closeForm}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Annuleren
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2.5 rounded-full bg-[#0F172A] text-white text-sm font-bold hover:bg-slate-800 transition-colors disabled:opacity-60"
            >
              {saving ? 'Opslaan...' : 'Opslaan'}
            </button>
          </div>
        </form>
      )}

      {schools.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-16 text-center text-slate-500 flex flex-col items-center gap-3">
          <School className="w-8 h-8 text-slate-300" />
          <p className="text-sm">Nog geen scholen toegevoegd.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {schools.map((school) => (
            <div
              key={school.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-[#0F172A]">{school.name}</h3>
                  {school.city && <p className="text-xs text-slate-500">{school.city}</p>}
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => openEditForm(school)}
                    className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center"
                    aria-label="Bewerken"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(school.id)}
                    className="w-8 h-8 rounded-full bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center"
                    aria-label="Verwijderen"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {school.contactPerson && (
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-700">Contact: </span>
                  {school.contactPerson}
                </p>
              )}
              {school.begeleiders && (
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-700">Begeleider(s): </span>
                  {school.begeleiders}
                </p>
              )}
              {school.notes && (
                <p className="text-sm text-slate-500 whitespace-pre-wrap border-t border-slate-100 pt-2">
                  {school.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
