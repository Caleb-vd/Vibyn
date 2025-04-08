'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const locations = ['bar', 'club', 'cafe', 'library'];

export default function Home() {
  const [locationIndex, setLocationIndex] = useState(0);

useEffect(() => {
  const cycle = setInterval(() => {
    setLocationIndex((i) => (i + 1) % locations.length);
  }, 1500); // changes every 1.5 seconds

  return () => clearInterval(cycle);
}, []);
  const [inView, setInView] = useState(false);
  const phoneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const refCopy = phoneRef.current;
  
    if (!refCopy) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
  
    observer.observe(refCopy);
  
    return () => observer.unobserve(refCopy);
  }, []);
  

  return (
    <main className="bg-black text-white min-h-screen">
      {/* HEADER */}
      <header className="w-full px-6 py-4 text-neon text-2xl font-bold">
        Vibyn
      </header>

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-between items-center text-center px-6 py-12 bg-black">
  {/* Vibyn Title – stays near top */}
  <h1
    className="text-[52px] font-normal"
    style={{ color: '#39FF14', fontFamily: 'Shrikhand' }}
  >
    Vibyn
  </h1>

  {/* Middle section: Cycling tagline + email */}
  <div className="flex flex-col items-center justify-center flex-grow mt-12">
    {/* Cycling Tagline – centered and bold */}
    <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white max-w-5xl px-4 mb-10">
      Now you can actually say you met them at a{' '}
      <span className="text-[#39FF14] drop-shadow-[0_0_8px_#39FF14] font-bold">
  {locations[locationIndex]}
</span>

    </h2>

    {/* Email Input – just below tagline */}
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
  </div>
</section>


    
      {/* PHONE + TEXT SECTION */}
      <section
        ref={phoneRef}
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6"
      >
        <div
  ref={phoneRef}
  className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6"
>
  <div
    className={`relative w-[300px] h-[600px] transition-all duration-1000 ease-out transform ${
      inView ? 'opacity-100 translate-y-0 animate-float' : 'opacity-0 translate-y-20'
    }`}
  >
          <Image
            src="/mockups/landingpage.png"
            alt="Landing Screen"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl m-0 p-0 border-none"
          />
        </div>

        <div className="max-w-md text-left space-y-4">
          <h2 className="text-2xl font-bold text-neon">
            Meet in real life, instantly....
          </h2>
          <p className="text-white/80">
            Vibyn lets you check into real venues and instantly see who else is vybin nearby. 
            Forget swiping for hours — match with people who are actually there.
          </p>
        </div>
      </div>
      </section>
    </main>
  );
}
