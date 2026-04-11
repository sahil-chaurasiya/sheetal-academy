'use client';
import { useEffect, useState } from 'react';

export default function JobPanel() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [jobToDelete, setJobToDelete] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/jobs');
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      console.error('Failed to fetch jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!title || !description) {
      setError('Both fields are required.');
      return;
    }

    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Job posted successfully!');
        setTitle('');
        setDescription('');
        fetchJobs();
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch {
      setError('Network error.');
    }
  };

  const confirmDelete = (jobId) => setJobToDelete(jobId);

  const handleDelete = async () => {
    if (!jobToDelete) return;

    try {
      const res = await fetch(`/api/jobs/${jobToDelete}`, { method: 'DELETE' });

      if (res.ok) {
        setJobs(jobs.filter((job) => job._id !== jobToDelete));
        setJobToDelete(null);
      } else {
        alert('Failed to delete job.');
      }
    } catch {
      alert('Error deleting job.');
    }
  };

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4 text-[crimson]">Job Postings</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4 mb-8 border">
        <div>
          <label className="block font-semibold mb-1">Job Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Spoken English Trainer"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Job Description</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief about the job"
          />
        </div>
        <button
          type="submit"
          className="bg-[crimson] text-white font-semibold px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Post Job
        </button>
        {error && <p className="text-red-600 mt-2">{error}</p>}
        {message && <p className="text-green-600 mt-2">{message}</p>}
      </form>

      <h2 className="text-xl font-semibold mb-4">Posted Jobs</h2>
      {loading ? (
        <p>Loading...</p>
      ) : jobs.length === 0 ? (
        <p className="text-gray-500">No jobs posted yet.</p>
      ) : (
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job._id} className="border border-gray-200 rounded p-4 bg-white shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-[crimson]">{job.title}</h3>
                  <p className="text-gray-700">{job.description}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Posted on {new Date(job.createdAt).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => confirmDelete(job._id)}
                  className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Confirmation Modal */}
      {jobToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-sm text-center">
            <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
            <p className="mb-6">Are you sure you want to delete this job?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setJobToDelete(null)}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
