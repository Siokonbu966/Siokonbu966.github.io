export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">About</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
        </div>

        <div className="grid items-center gap-12 md:grid-cols-[auto_1fr]">
          <div className="mx-auto md:mx-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-600 to-slate-700 opacity-60 blur" />
              <img
                src="/siokonbu02_icon.jpg"
                alt="Siokonbu"
                className="relative h-48 w-48 rounded-2xl object-cover shadow-2xl sm:h-56 sm:w-56"
              />
            </div>
          </div>

          <div className="space-y-6 text-slate-300">
            <p className="text-lg leading-relaxed">
              こんにちは、<strong className="text-white">Siokonbu</strong>です。
              高校生エンジニア志望として、Webフロントエンドや開発環境の整備に興味を持っています。
            </p>
            <p className="leading-relaxed">
              React / Next.js / TypeScript を中心に触り始め、最近は Nix や Linux 環境のカスタマイズに夢中です。
              新しい技術を試すことが好きで、自分のポートフォリオサイトもちょくちょく作り変えています。
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="flex items-center gap-2 text-slate-200">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                React / Next.js
              </li>
              <li className="flex items-center gap-2 text-slate-200">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                TypeScript
              </li>
              <li className="flex items-center gap-2 text-slate-200">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2 text-slate-200">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Nix / Linux
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
