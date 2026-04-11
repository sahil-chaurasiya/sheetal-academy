'use client';
import { useEffect, useState } from 'react';

const isActive = (b) => {
  if (!b.isActive) return false;
  const now = new Date();
  if (b.startDate && new Date(b.startDate) > now) return false;
  if (b.endDate   && new Date(b.endDate)   < now) return false;
  return true;
};

// Top Banner — image shown at full natural size, no cropping, no black bars
export function TopBannerStrip() {
  const [items,   setItems]   = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch('/api/promotions')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data))
          setItems(data.filter((b) => b.type === 'banner' && isActive(b)));
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (items.length <= 1) return;
    const t = setInterval(() => setCurrent((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [items]);

  if (!items.length) return null;
  const b = items[current];

  const img = (
    <div className="relative w-full mt-[60px] lg:mt-[32px]">
      {/* img is 100% wide, height is fully automatic — no cropping ever */}
      <img
        src={b.imageUrl}
        alt={b.label}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      {items.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white scale-125' : 'bg-white/50'}`}
            />
          ))}
        </div>
      )}
    </div>
  );

  return b.linkUrl
    ? <a href={b.linkUrl} target="_blank" rel="noopener noreferrer" className="block w-full">{img}</a>
    : <div className="w-full">{img}</div>;
}

// Popup Ad — shows every page load; use Hide in admin when campaign ends
export function PopupAd() {
  const [banner,  setBanner]  = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch('/api/promotions')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const popup = data.find((b) => b.type === 'popup' && isActive(b));
          if (popup) {
            setBanner(popup);
            setTimeout(() => setVisible(true), 1500);
          }
        }
      })
      .catch(() => {});
  }, []);

  if (!visible || !banner) return null;
  const dismiss = () => setVisible(false);

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] p-4"
      onClick={dismiss}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'popIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both' }}
      >
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow text-gray-600 hover:text-gray-900 text-lg font-bold transition"
        >
          ×
        </button>

        {banner.linkUrl
          ? <a href={banner.linkUrl} target="_blank" rel="noopener noreferrer" onClick={dismiss}>
              <img src={banner.imageUrl} alt={banner.label} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </a>
          : <img src={banner.imageUrl} alt={banner.label} style={{ width: '100%', height: 'auto', display: 'block' }} />
        }

        <div className="px-4 py-3 bg-gray-50 flex justify-between items-center">
          <p className="text-sm text-gray-600 font-medium">{banner.label}</p>
          {banner.linkUrl && (
            <a href={banner.linkUrl} target="_blank" rel="noopener noreferrer" onClick={dismiss}
              className="text-sm text-[crimson] font-semibold hover:underline">
              Learn More →
            </a>
          )}
        </div>
      </div>
      <style>{`
        @keyframes popIn {
          from { opacity:0; transform:scale(0.85); }
          to   { opacity:1; transform:scale(1); }
        }
      `}</style>
    </div>
  );
}