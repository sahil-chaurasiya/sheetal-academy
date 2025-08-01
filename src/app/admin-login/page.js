'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Prevent search engine indexing
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);
      localStorage.setItem('adminToken', data.token);
      router.push('/admin');
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <section
      className="min-h-screen relative flex items-center justify-center px-4 py-10"
      style={{
        background: 'linear-gradient(to bottom right, #2b0605, #100505)',
      }}
    >
      {/* 🔙 Back Button */}
      <button
        type="button"
        onClick={() => router.back()}
        className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white text-[crimson] font-semibold shadow-md hover:bg-[crimson] hover:text-white transition"
      >
        ← Back
      </button>

      {/* 🔐 Login Card */}
      <div className="w-full max-w-md bg-[#fafafa] p-8 rounded-3xl shadow-2xl border border-gray-200 animate-slideDown">
        <h2 className="text-3xl font-bold text-center text-[crimson] mb-8">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-600 mb-4 text-sm text-center">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[crimson] transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[crimson] transition"
          />

          <button
            type="submit"
            className="relative w-full py-2 px-4 font-semibold text-white rounded-lg overflow-hidden z-10 group"
          >
            <span className="absolute inset-0 bg-[#de3c3c] group-hover:bg-gradient-to-r from-[crimson] via-[#8B0000] to-[crimson] transition-all duration-500 ease-in-out rounded-lg"></span>
            <span className="relative z-10">Login</span>
          </button>
        </form>
      </div>
    </section>
  );
}
