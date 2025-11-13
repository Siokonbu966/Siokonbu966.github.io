import { FaGithub, FaTwitter } from "react-icons/fa"

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Siokonbu966', icon: FaGithub},
    { name: 'Twitter', url: 'https://x.com/Siokonbu966', icon: FaTwitter}
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
          <div className="fa-twitter"></div>
        </div>
        <p>Copyright &copy; Siokonbu966</p>
      </footer>
    </>
  )
}