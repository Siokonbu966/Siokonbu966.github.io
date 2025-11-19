import { FaGithub, FaTwitter } from "react-icons/fa"

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
        </div>
        <p>Copyright &copy; Siokonbu966</p>
      </footer>
    </>
  )
}