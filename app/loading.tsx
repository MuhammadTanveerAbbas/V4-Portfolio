export default function Loading() {
  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6"
      role="status"
      aria-label="Loading"
    >
      <span className="font-serif text-3xl md:text-5xl font-black uppercase tracking-tighter text-white/20">
        Loading
      </span>
      <div className="flex gap-2">
        <span className="w-2 h-2 rounded-full bg-[#4a0dbc] animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2 h-2 rounded-full bg-[#4a0dbc] animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2 h-2 rounded-full bg-[#4a0dbc] animate-bounce" />
      </div>
    </div>
  );
}
