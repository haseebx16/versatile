'use client';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from "aos";
import ContactModal from './ContactModal';
import "aos/dist/aos.css";
import { font } from './fonts/font';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [cubes, setCubes] = useState([]);

  // ✅ Generate random values *only on the client* inside useEffect
  useEffect(() => {
    const generateCubes = () => {
      return Array.from({ length: 10 }).map(() => ({
        id: Math.random(),
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        animationDelay: `${Math.random() * 2}s`,
      }));
    };

    setCubes(generateCubes());
  }, []);

  return (
    <section className={`${font.className} relative bg-white min-h-[75vh] p-12 overflow-hidden`}>

      {/* ✅ Animated Cubes (Only on Client) */}
      <div className="absolute inset-0 overflow-hidden">
        {cubes.map((cube) => (
          <div
            key={cube.id}
            className="absolute w-10 h-10 border-2 border-customPurple opacity-80 animate-cube"
            style={{
              left: cube.left,
              top: cube.top,
              animationDelay: cube.animationDelay
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto text-center px-4 py-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="text-black max-w-2xl">
            <h2 data-aos="fade-down" className="font-oswald text-lg md:text-xl mb-4 text-cards uppercase font-medium tracking-wider">
              <span className='text-customPurple'>Versatile Marketers</span> - Your Personal Unfair Advantage
            </h2>
            <h1 data-aos="fade-up" className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
              ONE-WAY STOP TO TURN DREAMS INTO REALITY
            </h1>
            <button onClick={openModal} data-aos="fade-right" className="btn-primary hover:text-white border-2 border-black bg-transparent hover:bg-zinc-900 bg-cards text-black text-lg uppercase tracking-wider">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-16'>
        <button data-aos="fade-up" className='px-4 py-2 border-2 border-customPurple text-customPurple font-bold rounded-full'>Scroll Down &#8595;</button>
      </div>
    </section>
  );
}
