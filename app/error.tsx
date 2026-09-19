"use client";

import { useEffect } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main" className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-40 pb-32 px-4 md:px-8 text-center">
        <p className="font-mono text-xs uppercase text-[#4a0dbc] tracking-widest mb-4">Something went wrong</p>
        <h1 className="font-serif text-4xl md:text-6xl uppercase tracking-tighter">
          That did not load
        </h1>
        <p className="font-mono text-sm text-white/70 mt-6 max-w-md mx-auto leading-relaxed">
          An unexpected error stopped this page from rendering. Trying again
          usually fixes it.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-10 px-8 py-4 bg-[#4a0dbc] text-white font-mono text-sm uppercase hover:bg-white hover:text-[#4a0dbc] transition-colors"
        >
          Try again
        </button>
      </section>

      <Footer />
    </main>
  );
}
