export default function HeroSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.12),_transparent_60%)]" />
      <div className="relative z-10 max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium tracking-[0.2em] text-blue-400 uppercase">
          Portfolio Template
        </p>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
          Siokonbu
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          一般エンジニア志望学生。
          <br className="hidden sm:block" />
          Web技術をふわふわ触りながら、Nixにどハマり中。
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#about"
            className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-500"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-600 px-8 py-3 font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
