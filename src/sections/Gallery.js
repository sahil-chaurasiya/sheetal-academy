import React from 'react';

const images = [
  '/gallery/classroom1.jpg',
  '/gallery/speaking-session.jpg',
  '/gallery/event1.jpg',
  '/gallery/certificate.jpg',
  '/gallery/faculty.jpg',
  '/gallery/students.jpg',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
