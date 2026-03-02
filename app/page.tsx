export default function Home() {
  return (
    <main className="min-h-screen bg-[#8b0000] flex flex-col items-center justify-center relative overflow-hidden text-amber-50">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="z-10 text-center max-w-4xl px-6 py-16 bg-black/20 backdrop-blur-sm rounded-3xl border border-amber-500/30 shadow-2xl mx-4">
        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 drop-shadow-sm uppercase tracking-wider">
          Thịnh Thế Vinh Hoa
        </h1>

        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-10"></div>

        <p className="text-2xl md:text-4xl font-medium tracking-wide leading-relaxed drop-shadow-md text-amber-50">
          Cảm ơn vì sự tham gia của các bạn <br className="hidden md:block" /> đã tạo nên 1 sự kiện ý nghĩa
        </p>

        <div className="mt-12 flex items-center justify-center gap-4 text-amber-300">
          <span className="w-16 h-px bg-amber-500/50"></span>
          <span className="text-lg uppercase tracking-[0.3em]">2026</span>
          <span className="w-16 h-px bg-amber-500/50"></span>
        </div>
      </div>
    </main>
  );
}
