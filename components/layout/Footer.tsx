import { siteConfig, footerContent } from "@/data/content"

export function Footer() {
  return (
    <footer className="bg-primary-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">
              {siteConfig.name}
            </span>
          </div>

          <nav className="flex flex-wrap gap-8">
            {footerContent.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800">
          <p className="text-sm text-center text-gray-400">{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
