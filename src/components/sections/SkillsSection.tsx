export default function SkillsSection() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Skills</h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-blue-600" />
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-slate-700 bg-[#151520] p-6">
            <h3 className="mb-3 text-lg font-semibold text-white">OS</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Windows</li>
              <li>Ubuntu</li>
              <li>MacOS</li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-700 bg-[#151520] p-6">
            <h3 className="mb-3 text-lg font-semibold text-white">Engine, Frameworks</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Node.js</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-700 bg-[#151520] p-6">
            <h3 className="mb-3 text-lg font-semibold text-white">Qualification</h3>
            <ul className="space-y-2 text-slate-300">
              <li>ITパスポート</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}