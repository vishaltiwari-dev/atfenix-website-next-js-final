import Image from "next/image";
import Link from "next/link";
import { aboutLinks, navItems } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid page-shell">
        <div>
          <Link className="footer-brand" href="/">
            <Image
              alt="Atfenix"
              className="footer-logo"
              height={1080}
              src="/footer-logo.png"
              width={1080}
            />
          </Link>
          <p>
            Premium infrastructure services for websites, applications, servers,
            and data center workloads.
          </p>
        </div>
        <div>
          <h3>Services</h3>
          {navItems.slice(0, 4).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Company</h3>
          {aboutLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <Link href="/contact">Request Consultation</Link>
          <a href="mailto:support@atfenix.com">support@atfenix.com</a>
          <a href="tel:+919211978879">+91 92119 78879</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 Atfenix</span>
        <span>
          Powered by{" "}
          <a href="https://www.buildermonkey.com/" rel="noreferrer" target="_blank">
            Buildermonkey
          </a>
          .
        </span>
      </div>
    </footer>
  );
}
