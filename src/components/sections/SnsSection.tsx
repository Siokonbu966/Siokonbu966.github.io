import { SiGithub, SiX, SiQiita, SiInstagram } from "react-icons/si"

export default function SnsSection() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Siokonbu966', icon: SiGithub },
    { name: 'Twitter', url: 'https://x.com/Siokonbu966', icon: SiX },
    { name: 'Instagram', url: 'https://www.instagram.com/siokonbu966/', icon: SiInstagram },
    { name: 'Nostr', url: 'https://nosta.me/5e3c2e98730757e01cdd8b219d9260a196701d64976051a889597e2353efa18e', icon: null },
    { name: 'Qiita', url: 'https://qiita.com/Siokonbu', icon: SiQiita },
  ]

  return (
    <section className="px-6 pt-16 pb-16 sm:pt-24 sm:pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-left">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">SNS</h2>
          <div className="mt-4 h-0.5 w-16 bg-blue-600" />
        </div>

        <div className="space-y-4 text-left">
          {socialLinks.map((link) => (
            <div key={link.name} className="flex items-center gap-4">
              {link.icon ? (
                <link.icon size={24} className="text-slate-300" />
              ) : (
                <img
                  src="/nostr-icon-white-transparent.svg"
                  alt="Nostr"
                  className="h-6 w-6"
                  loading="lazy"
                />
              )}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-slate-300 transition hover:text-blue-400"
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
