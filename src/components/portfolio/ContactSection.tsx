import { FaGithub } from "react-icons/fa"

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Siokonbu966", icon: FaGithub },
]

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Contact</h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          お気軽にSNSからご連絡ください。
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900 px-6 py-3 text-slate-200 transition hover:border-blue-500 hover:text-white"
              >
                <Icon size={20} />
                <span className="font-medium">{link.name}</span>
              </a>
            )
          })}
          <a
            href="https://x.com/Siokonbu966"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900 px-6 py-3 font-medium text-slate-200 transition hover:border-blue-500 hover:text-white"
          >
            𝕏
          </a>
        </div>
      </div>
    </section>
  )
}
