'use client';

import { useEffect, useState } from 'react';

const locations = ['bar', 'cafe', 'club', 'library'];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % locations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl md:text-5xl font-bold">
        Now you can actually say you met them in a{' '}
        <span className="text-neon drop-shadow-[0_0_8px_#39FF14]">
          {locations[index]}
        </span>.
      </h1>

      <form
        action="#"
        method="post"
        className="mt-10 w-full max-w-sm"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="w-full p-3 rounded-md text-black mb-4"
        />
        <button
          type="submit"
          className="bg-neon text-black font-bold py-3 px-6 rounded-md w-full hover:brightness-125 drop-shadow-[0_0_10px_#39FF14]"
        >
          Get Early Access
        </button>
      </form>
    </main>
  );
}
