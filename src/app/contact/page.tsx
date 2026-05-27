import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactForm } from "@/components/sections/contact-form";
import { ServerVisual } from "@/components/sections/server-visual";

export const metadata: Metadata = {
  title: "Contact Us | Atfenix Hosting",
  description:
    "Request a premium consultation for VPS, dedicated servers, co-location, or web hosting.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact Atfenix Hosting",
    description:
      "Request a premium consultation for VPS, dedicated servers, co-location, or web hosting.",
    url: "/contact",
    siteName: "Atfenix Hosting",
    images: [
      {
        url: "/logo-cropped.png",
        width: 1262,
        height: 335,
        alt: "Atfenix Hosting"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Atfenix Hosting",
    description:
      "Request a premium consultation for VPS, dedicated servers, co-location, or web hosting.",
    images: ["/logo-cropped.png"]
  }
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="contact-hero">
          <ServerVisual />
          <div className="page-shell contact-hero-grid">
            <div>
              <p className="eyebrow">Contact Us</p>
              <h1>Let&apos;s design the right hosting setup for your business.</h1>
              <p>
                Tell us what you are building, moving, or improving. Our team
                will help you choose a practical path across VPS, dedicated
                servers, co-location, or managed web hosting.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="page-shell contact-info-grid">
          <article>
            <span className="red-rule" />
            <h2>Premium consultation, practical answers.</h2>
            <p>
              We review your current stack, business goals, expected traffic,
              storage needs, uptime expectations, security concerns, migration
              timeline, and budget range. Then we recommend the cleanest route:
              web hosting for simple sites, VPS for controlled growth,
              dedicated servers for heavy production, or co-location for owned
              hardware.
            </p>
          </article>
          <article className="contact-card">
            <h3>Direct contact</h3>
            <p>Email: support@atfenix.com</p>
            <p>Phone: +91 9211978879</p>
            <p>Hours: Monday to Saturday, 10:00 AM - 7:00 PM</p>
          </article>
          <article className="contact-card">
            <h3>What to include</h3>
            <p>
              Current hosting provider, expected visitors, technology stack,
              storage size, email needs, backup expectations, and any urgent
              launch date.
            </p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
