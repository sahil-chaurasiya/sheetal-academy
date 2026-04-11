'use client';
import { useEffect, useRef, useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// 🔧 SETUP REQUIRED (one-time, free):
//   1. Create a free account at https://cloudinary.com
//   2. Dashboard → Settings → Upload → Add upload preset
//      • Set "Signing Mode" to UNSIGNED
//      • Note the preset name (e.g. "sheetal_ads")
//   3. Note your Cloud Name from the dashboard top-left
//   4. Add to your .env.local:
//        NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_preset_name
//   (Cloud name is already hardcoded)
// ─────────────────────────────────────────────────────────────────────────────

const CLOUD_NAME    = 'dy1njtai9'; // your Cloudinary cloud name
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || '';

const TYPES = [
  { value: 'banner',  label: '📢 Top Banner'  },
  { value: 'popup',   label: '🪟 Popup Ad'     },
];

const TYPE_COLORS = {
  banner:  'bg-blue-100 text-blue-700',
  popup:   'bg-purple-100 text-purple-700',
};

const emptyForm = {
  label:    '',
  linkUrl:  '',
  type:     'banner',
  isActive:  true,
  startDate: '',
  endDate:   '',
};

// ─── Drag-and-drop image uploader ─────────────────────────────────────────────
function ImageUploader({ onUpload }) {
  const inputRef              = useRef(null);
  const [preview,   setPreview]   = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error,     setError]     = useState('');
  const [progress,  setProgress]  = useState(0);
  const [dragging,  setDragging]  = useState(false);

  const handleFile = async (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file (JPG, PNG, WebP, GIF, etc.)');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('File is too large. Max 10 MB.');
      return;
    }

    setError('');
    setPreview(URL.createObjectURL(file));
    setUploading(true);
    setProgress(0);

    if (!UPLOAD_PRESET) {
      setError(
        'Upload preset missing. Add NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET to your .env.local file.'
      );
      setUploading(false);
      return;
    }

    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('upload_preset', UPLOAD_PRESET);
      fd.append('folder', 'sheetal-academy/ads');

      const secureUrl = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`);
        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 100));
        };
        xhr.onload  = () => {
          if (xhr.status === 200) resolve(JSON.parse(xhr.responseText).secure_url);
          else reject(new Error('Upload failed: ' + xhr.responseText));
        };
        xhr.onerror = () => reject(new Error('Network error'));
        xhr.send(fd);
      });

      setProgress(100);
      onUpload(secureUrl);
    } catch (err) {
      console.error(err);
      setError('Upload failed. Check your Cloudinary config.');
      setPreview(null);
      onUpload('');
    } finally {
      setUploading(false);
    }
  };

  const clear = () => {
    setPreview(null);
    setProgress(0);
    setError('');
    onUpload('');
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Advertisement Image *
      </label>

      {!preview ? (
        <div
          onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onClick={() => inputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors ${
            dragging ? 'border-[crimson] bg-red-50' : 'border-gray-300 hover:border-[crimson]'
          }`}
        >
          <div className="text-5xl mb-3">🖼️</div>
          <p className="text-sm font-medium text-gray-600">Click to browse or drag & drop image here</p>
          <p className="text-xs text-gray-400 mt-1">JPG, PNG, WebP, GIF — max 10 MB</p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFile(e.target.files[0])}
          />
        </div>
      ) : (
        <div className="relative border rounded-xl overflow-hidden bg-gray-50">
          <img
            src={preview}
            alt="Preview"
            className="w-full max-h-52 object-contain"
          />

          {uploading && (
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-3">
              <div className="w-48 bg-white/30 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-white h-full rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-white text-sm font-semibold">Uploading… {progress}%</p>
            </div>
          )}

          {!uploading && progress === 100 && (
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow">
              ✓ Uploaded
            </div>
          )}

          {!uploading && (
            <button
              type="button"
              onClick={clear}
              className="absolute top-2 right-2 bg-white/90 hover:bg-white text-gray-600 hover:text-red-600 w-8 h-8 rounded-full flex items-center justify-center shadow text-xl font-bold transition"
            >
              ×
            </button>
          )}
        </div>
      )}

      {error && (
        <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600">
          {error}
        </div>
      )}
    </div>
  );
}

// ─── Main Admin Panel ─────────────────────────────────────────────────────────
export default function BannerPanel() {
  const [form,     setForm]     = useState(emptyForm);
  const [imageUrl, setImageUrl] = useState('');
  const [banners,  setBanners]  = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [message,  setMessage]  = useState('');
  const [error,    setError]    = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [preview,  setPreview]  = useState(null);
  const [uploaderKey, setUploaderKey] = useState(0);

  useEffect(() => { fetchBanners(); }, []);

  const fetchBanners = async () => {
    try {
      setLoading(true);
      const res  = await fetch('/api/promotions');
      const data = await res.json();
      setBanners(Array.isArray(data) ? data : []);
    } catch {
      console.error('Failed to fetch banners');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!form.label) { setError('Label is required.');            return; }
    if (!imageUrl)   { setError('Please upload an image first.'); return; }

    try {
      const res  = await fetch('/api/promotions', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...form, imageUrl, order: 0 }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Advertisement published! ✓');
        setForm(emptyForm);
        setImageUrl('');
        setUploaderKey(k => k + 1);
        fetchBanners();
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch {
      setError('Network error.');
    }
  };

  const toggleActive = async (id, current) => {
    try {
      await fetch('/api/promotions', {
        method:  'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ id, isActive: !current }),
      });
      setBanners((prev) =>
        prev.map((b) => (b._id === id ? { ...b, isActive: !current } : b))
      );
    } catch { alert('Failed to toggle.'); }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await fetch(`/api/promotions?id=${deleteId}`, { method: 'DELETE' });
      if (res.ok) {
        setBanners((prev) => prev.filter((b) => b._id !== deleteId));
        setDeleteId(null);
      } else { alert('Failed to delete.'); }
    } catch { alert('Error deleting.'); }
  };

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-1 text-[crimson]">Advertisements & Banners</h1>
      <p className="text-sm text-gray-500 mb-6">
        Upload promotional images that appear as banners or popups across the site.
      </p>

      {/* Cloudinary setup notice */}
      {(!UPLOAD_PRESET) && (
        <div className="mb-6 p-4 bg-amber-50 border border-amber-300 rounded-xl text-sm">
          <p className="font-semibold text-amber-800 mb-2">⚙️ One last step to enable image uploads</p>
          <ol className="list-decimal list-inside text-amber-700 space-y-1 mb-2">
            <li>Create a free account at <a href="https://cloudinary.com" target="_blank" rel="noreferrer" className="underline font-medium">cloudinary.com</a></li>
            <li>Go to <strong>Settings → Upload → Add upload preset</strong> → set Signing Mode to <strong>Unsigned</strong></li>
            <li>Add these two lines to your <code className="bg-amber-100 px-1 rounded">.env.local</code> file:</li>
          </ol>
          <pre className="bg-amber-100 rounded p-3 text-xs text-amber-900 overflow-x-auto font-mono">
{`NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=sheetal_ads`}
          </pre>
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-6 space-y-5 mb-10 border border-gray-100"
      >
        <h2 className="text-lg font-semibold text-gray-800">➕ Add New Advertisement</h2>

        <ImageUploader key={uploaderKey} onUpload={setImageUrl} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Label / Name *</label>
            <input
              name="label"
              value={form.label}
              onChange={handleChange}
              placeholder="e.g. Summer Batch Offer"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ad Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              {TYPES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Click URL <span className="text-gray-400">(optional)</span>
          </label>
          <input
            name="linkUrl"
            value={form.linkUrl}
            onChange={handleChange}
            placeholder="https://sheetal-academy.vercel.app/courses"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date <span className="text-gray-400">(optional — leave blank to show immediately)</span>
            </label>
            <input
              name="startDate"
              type="date"
              value={form.startDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date <span className="text-gray-400">(optional — leave blank to run indefinitely)</span>
            </label>
            <input
              name="endDate"
              type="date"
              value={form.endDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
        </div>

        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2 mt-5">
            <input
              type="checkbox"
              name="isActive"
              id="isActive"
              checked={form.isActive}
              onChange={handleChange}
              className="w-4 h-4 accent-red-600"
            />
            <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
              Active (visible on site immediately)
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[crimson] text-white font-semibold px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Publish Advertisement
        </button>

        {message && <p className="text-green-600 text-sm">{message}</p>}
        {error   && <p className="text-red-600 text-sm">{error}</p>}
      </form>

      {/* List */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800">All Advertisements</h2>

      {loading ? (
        <p className="text-gray-500 text-sm">Loading...</p>
      ) : banners.length === 0 ? (
        <div className="text-center py-12 text-gray-400 border-2 border-dashed rounded-xl">
          <p className="text-4xl mb-2">📭</p>
          <p>No advertisements yet. Upload your first one above!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {banners.map((b) => (
            <div
              key={b._id}
              className={`border rounded-xl p-4 bg-white shadow-sm flex gap-4 items-start transition-opacity ${!b.isActive ? 'opacity-50' : ''}`}
            >
              <div
                className="flex-shrink-0 w-28 h-20 bg-gray-100 rounded overflow-hidden border cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setPreview(b.imageUrl)}
                title="Click to preview"
              >
                <img
                  src={b.imageUrl}
                  alt={b.label}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='80'%3E%3Crect width='112' height='80' fill='%23f3f4f6'/%3E%3Ctext x='56' y='44' text-anchor='middle' font-size='11' fill='%239ca3af'%3ENo Image%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-800">{b.label}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${TYPE_COLORS[b.type] || 'bg-gray-100 text-gray-600'}`}>
                    {TYPES.find((t) => t.value === b.type)?.label || b.type}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${b.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {b.isActive ? '● Live' : '○ Hidden'}
                  </span>
                </div>
                {b.linkUrl && (
                  <a href={b.linkUrl} target="_blank" rel="noreferrer" className="text-xs text-blue-500 hover:underline truncate block">
                    🔗 {b.linkUrl}
                  </a>
                )}
                <p className="text-xs text-gray-400 mt-1">
                  Added {new Date(b.createdAt).toLocaleDateString()}
                  {(b.startDate || b.endDate) && (
                    <span className="ml-2">
                      {b.startDate ? `· From ${new Date(b.startDate).toLocaleDateString()}` : ''}
                      {b.endDate   ? ` · Until ${new Date(b.endDate).toLocaleDateString()}`  : ''}
                    </span>
                  )}
                </p>
              </div>

              <div className="flex flex-col gap-2 flex-shrink-0">
                <button
                  onClick={() => toggleActive(b._id, b.isActive)}
                  className={`text-xs px-3 py-1 rounded font-medium transition ${b.isActive ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                >
                  {b.isActive ? 'Hide' : 'Show'}
                </button>
                <button
                  onClick={() => setPreview(b.imageUrl)}
                  className="text-xs px-3 py-1 rounded font-medium bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                >
                  Preview
                </button>
                <button
                  onClick={() => setDeleteId(b._id)}
                  className="text-xs px-3 py-1 rounded font-medium bg-red-50 text-red-600 hover:bg-red-100 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Preview Modal */}
      {preview && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setPreview(null)}>
          <div className="bg-white rounded-xl overflow-hidden max-w-2xl w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <span className="font-semibold text-gray-700">Image Preview</span>
              <button onClick={() => setPreview(null)} className="text-gray-400 hover:text-gray-700 text-2xl font-bold">×</button>
            </div>
            <div className="p-4 bg-gray-50">
              <img src={preview} alt="Preview" className="w-full max-h-96 object-contain rounded" />
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm text-center">
            <h3 className="text-lg font-semibold mb-2">Delete Advertisement?</h3>
            <p className="text-gray-500 text-sm mb-6">This cannot be undone.</p>
            <div className="flex justify-center gap-4">
              <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm">Yes, Delete</button>
              <button onClick={() => setDeleteId(null)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 text-sm">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
