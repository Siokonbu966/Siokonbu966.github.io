import { FaGithub } from "react-icons/fa"

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Siokonbu966', icon: FaGithub},
  ]
  return (
    <>
      <footer>
        <div className="social-links">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className="social-badges"
              >
                <Icon size={32} />
              </a>
            );
          })}
          <a
            className="social-badges-x fa-twitter"
            href="https://x.com/Siokonbu966"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          ></a>
          <a
            className="social-badges nostr-badge"
            href="https://nosta.me/5e3c2e98730757e01cdd8b219d9260a196701d64976051a889597e2353efa18e"
            target="_blank"
            rel="noopener noreferrer"
            title="Nostr"
          >
            <img
              src="/nostr-icon-white-transparent.svg"
              alt="Nostr"
              className="nostr-icon"
              loading="lazy"
            />
          </a>
        </div>
        <p>Copyright &copy; Siokonbu966</p>
      </footer>
    </>
  )
}