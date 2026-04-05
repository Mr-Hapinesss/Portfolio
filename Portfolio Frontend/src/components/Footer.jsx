function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Email", href: "mailto:hello@example.com" },
  ]

  const navLinks = ["About", "Projects", "Skills", "Contact"]

  return (
    <footer className="bg-stone-950 border-t border-stone-800 font-mono">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">

          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-white font-bold text-lg tracking-tight mb-3">
              dev<span className="text-amber-400">.</span>portfolio
            </p>
            <p className="text-stone-500 text-xs leading-relaxed">
              Building clean, performant web experiences. Open to freelance and full-time opportunities.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-stone-600 text-xs tracking-widest uppercase mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-stone-400 text-xs tracking-widest uppercase hover:text-amber-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-stone-600 text-xs tracking-widest uppercase mb-4">Find me on</p>
            <ul className="space-y-2">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 text-xs tracking-widest uppercase hover:text-amber-400 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-amber-400/50">→</span> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-stone-600 text-xs tracking-widest">
            © {currentYear} dev.portfolio — All rights reserved.
          </p>
          <p className="text-stone-700 text-xs">
            Built with <span className="text-amber-400/70">React</span> & <span className="text-amber-400/70">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
