import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function NotFound() {
  return (
    <main id="main" className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-40 pb-32 px-4 md:px-8 text-center">
        <p className="font-mono text-xs uppercase text-[#4a0dbc] tracking-widest mb-4">404</p>
        <h1 className="font-serif text-4xl md:text-6xl uppercase tracking-tighter">
          Page not found
        </h1>
        <p className="font-mono text-sm text-white/70 mt-6 max-w-md mx-auto leading-relaxed">
          That page does not exist. The work, services and contact pages are all
          still here.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-[#4a0dbc] text-white font-mono text-sm uppercase hover:bg-white hover:text-[#4a0dbc] transition-colors"
          >
            Back home
          </Link>
          <Link
            href="/work"
            className="px-6 py-3 border-2 border-white/30 text-white font-mono text-sm uppercase hover:border-[#4a0dbc] transition-colors"
          >
            See the work
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
