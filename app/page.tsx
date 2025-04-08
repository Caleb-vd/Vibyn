'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

// List of locations
const locations = ['bar', 'club', 'cafe', 'library'];

export default function Home() {
  // Initialize state to track location index
  const [locationIndex, setLocationIndex] = useState(0);

  // Hook for scroll animation trigger
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  // Cycle the location every 1.5 seconds
  useEffect(() => {
    const cycle = setInterval(() => {
      setLocationIndex((prev) => (prev + 1) % locations.length);  // This cycles through the location index
    }, 1500);

    return () => clearInterval(cycle);  // Cleanup on unmount
  }, []);

  // IntersectionObserver to trigger animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, { threshold: 0.4 });

    if (phoneRef.current) observer.observe(phoneRef.current);

    return () => {
      if (phoneRef.current) observer.unobserve(phoneRef.current);
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="h-screen w-full flex flex-col justify-start items-center text-center px-6 pt-16 bg-black">
        {/* Vibyn Title */}
        <h1
          className="text-[52px] md:text-[64px] font-normal mb-10"
          style={{ color: '#39FF14', fontFamily: 'Shrikhand' }}
        >
          Vibyn
        </h1>

        {/* Cycling Text */}
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white max-w-5xl px-4 mb-14">
          Now you can actually say you met them at a{' '}
          <span className="text-[#39FF14] drop-shadow-[0_0_8px_#39FF14] font-bold">
            {locations[locationIndex]} {/* This uses locationIndex */}
          </span>.
        </h2>

        {/* Email Input */}
        <div className="w-full max-w-xs opacity-60">
          <input
            type="email"
            placeholder="Enter your email for early access"
            className="w-full bg-white text-black px-4 py-2 rounded-md text-sm focus:outline-none"
          />
          <button className="mt-3 w-full py-2 rounded-md bg-[#39FF14] text-black font-semibold text-sm">
            Get Early Access
          </button>
        </div>
      </section>

      {/* PHONE SECTION */}
      <section className="min-h-screen w-full bg-black flex flex-col md:flex-row items-center justify-center gap-16 px-6 py-24">
        {/* Phone mockup with scroll-triggered fade-in */}
        <div
          ref={phoneRef}
          className={`transition-all duration-700 ease-in-out ${
            inView ? 'animate-fadeIn animate-float' : 'opacity-0'
          }`}
        >
          <Image
            src="/mockups/landingpage.png"
            alt="Landing Screen"
            width={300}
            height={600}
            className="rounded-3xl object-cover"
          />
        </div>

        {/* Right-hand text */}
        <div className="max-w-md text-white text-left space-y-4 px-4">
          <h2 className="text-3xl font-bold text-[#39FF14]">
            Meet in real life, instantly
          </h2>
          <p className="text-white/80 text-lg">
            Vibyn lets you check into real venues and instantly see who else is vibing nearby.
            Forget endless swiping — match with people who are actually there.
          </p>
        </div>
      </section>
    </>
  );
}
