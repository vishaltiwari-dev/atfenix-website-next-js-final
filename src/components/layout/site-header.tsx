import Image from "next/image";
import Link from "next/link";
import { aboutLinks, navItems } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <Image
          alt="Atfenix"
          className="brand-logo"
          height={90}
          priority
          src="/logo-header-full.png"
          width={320}
        />
      </Link>
      <input className="nav-toggle" id="nav-toggle" type="checkbox" />
      <label className="menu-button" htmlFor="nav-toggle" aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </label>
      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <div className="nav-dropdown">
          <Link href="/about-us">About Us</Link>
          <div className="dropdown-menu">
            {aboutLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <Link className="nav-cta" href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}
