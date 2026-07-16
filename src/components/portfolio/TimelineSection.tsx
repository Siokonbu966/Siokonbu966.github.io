const history = [
  { year: "2024", title: "N高等学校 入学", description: "学校法人角川ドワンゴ学園 N高等学校に入学。" },
]

export default function TimelineSection() {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">History</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        <div className="relative border-l border-slate-700 pl-8">
          {history.map((item) => (
            <div key={item.year} className="mb-10 last:mb-0">
              <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-slate-950" />
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
                <span className="text-sm font-semibold text-blue-400">{item.year}</span>
                <h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
