const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend / Runtime", items: ["Node.js", "Python"] },
  { category: "OS / Tooling", items: ["Ubuntu", "MacOS", "Nix", "Git"] },
  { category: "Qualification", items: ["ITパスポート"] },
]

export default function SkillsSection() {
  return (
    <section className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Skills</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6 shadow-xl backdrop-blur transition hover:border-blue-600/50"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
