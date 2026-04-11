'use client';
import { useEffect, useState } from 'react';
import RegisterForm from './RegistrationForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function EventList({ type = "upcoming" }) {
  const [events, setEvents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => {
        const today = new Date();
        const filtered = data.filter(event => {
          const eventDate = new Date(event.date);
          return type === "upcoming"
            ? eventDate >= today
            : eventDate < today;
        });
        setEvents(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load events:", err);
        setLoading(false);
      });
  }, [type]);

  return (
    <div className="w-full mx-auto space-y-10">
      {loading && (
        <p className="text-gray-300 text-lg text-center">Loading events...</p>
      )}

      {!loading && events.length === 0 && (
        <p className="text-gray-300 text-lg text-center">
          {type === "upcoming"
            ? "No upcoming events at the moment. Please check back later!"
            : "No past events found."}
        </p>
      )}

      {!loading && events.length > 0 && (
        <div className="relative">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: 'swiper-pagination-bullet !bg-white/60',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#ff3c38]'
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Autoplay, Pagination]}
            className="w-full px-2 md:px-6 pb-14"
          >
            {events.map(event => (
              <SwiperSlide key={event._id}>
                <div className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-[1.03] transition duration-300 text-left h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-200 mb-3">{event.description}</p>
                    <p className="text-sm text-red-200 mb-4">
                      📅 <strong>{new Date(event.date).toDateString()}</strong> | 💰 <strong>₹{event.price || 'Free'}</strong>
                    </p>
                  </div>

                  {/* ✅ Only show Register button for upcoming events */}
                  {type !== "past" && (
                    <button
                      onClick={() => setSelected(event._id)}
                      className="bg-[#ff3c38] hover:bg-[#e3322e] text-white px-6 py-2 rounded-full font-semibold transition"
                    >
                      Register
                    </button>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination mt-4 flex justify-center"></div>
        </div>
      )}

      {selected && (
        <RegisterForm eventId={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
