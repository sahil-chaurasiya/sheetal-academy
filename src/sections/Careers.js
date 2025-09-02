'use client';

import { useEffect, useState } from 'react';
import { Briefcase, Home } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/Header'; // adjust path if needed

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('/api/jobs');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      {/* <Header /> */}

      <section
        id="careers"
        className="pb-32 px-6 lg:px-20 bg-white text-center text-[#1a0e0e]"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          <span className="text-[#ff3c38] drop-shadow-[0_1px_5px_rgba(255,60,56,0.5)]">Join</span>{' '}
          <span className="font-[Pacifico]">Our Team</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="max-w-2xl mx-auto text-lg text-[#444] mb-14"
        >
          At Sheetal Academy Uran, we believe in empowering people—whether they&apos;re students or part of our growing team.
          Explore exciting career opportunities and be a part of our mission.
        </motion.p>

        {loading ? (
          <p>Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <p className="text-gray-500">Currently no open positions.</p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {jobs.map((job, i) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-[#fff3f3] border border-[#ffe1e1] rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 text-left"
              >
                <div className="text-[#ff3c38] mb-4">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1a0e0e] mb-2">{job.title}</h3>
                <p className="text-[#555] whitespace-pre-line">{job.description}</p>
                <p className="text-xs text-gray-400 mt-4">
                  Posted on {new Date(job.createdAt).toLocaleDateString()}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <a
            href="https://wa.me/919967286368?text=Hi, I'm interested in a career opportunity at Sheetal Academy Uran."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff3c38] hover:bg-[#e12f2f] text-white font-semibold py-3 px-8 rounded-full transition"
          >
            Apply Now on WhatsApp
          </a>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#ff3c38] hover:text-[#e12f2f] font-medium border border-[#ff3c38] hover:border-[#e12f2f] py-2 px-6 rounded-full transition"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </motion.div>
      </section>
    </>
  );
}
