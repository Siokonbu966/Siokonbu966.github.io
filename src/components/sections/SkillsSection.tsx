export default function SkillsSection() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Skills</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6 shadow-xl backdrop-blur transition hover:border-blue-600/50">
            <h3 className="mb-4 text-lg font-semibold text-white">OS</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Windows</li>
              <li>Ubuntu</li>
              <li>MacOS</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6 shadow-xl backdrop-blur transition hover:border-blue-600/50">
            <h3 className="mb-4 text-lg font-semibold text-white">Engine, Frameworks</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Node.js</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6 shadow-xl backdrop-blur transition hover:border-blue-600/50">
            <h3 className="mb-4 text-lg font-semibold text-white">Qualification</h3>
            <ul className="space-y-2 text-slate-300">
              <li>ITパスポート</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}