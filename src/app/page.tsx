import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HeroVideo } from "@/components/sections/hero-video";
import { highlights, processSteps, services } from "@/lib/site-data";

const serviceImages = [
  "/landing-network.png",
  "/landing-data-center.jpg",
  "/home-rack.png",
  "/landing-ai-robot.jpg"
];

const tickerItems = [
  "VPS Hosting",
  "Dedicated Servers",
  "Co-location",
  "Managed Web Hosting",
  "Migration Support",
  "Backup Planning",
  "Bare Metal",
  "NVMe Storage",
  "DDoS Protection",
  "Cloud VPS",
  "Server Monitoring",
  "Rack Space",
  "Firewall Setup",
  "Uptime Planning"
];

export const metadata: Metadata = {
  title: "Atfenix | Premium VPS, Dedicated Servers And Web Hosting",
  description:
    "Atfenix provides VPS, dedicated server, co-location, and managed web hosting services with scalable infrastructure, security planning, and migration support.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Atfenix | Premium Server And Hosting Solutions",
    description:
      "Build, migrate, and scale websites and applications with VPS, dedicated servers, co-location, and managed web hosting.",
    url: "/",
    siteName: "Atfenix",
    images: [
      {
        url: "/logo-cropped.png",
        width: 1262,
        height: 335,
        alt: "Atfenix"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Atfenix | Premium Server And Hosting Solutions",
    description:
      "VPS, dedicated servers, co-location, and managed web hosting for business workloads.",
    images: ["/logo-cropped.png"]
  }
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <HeroVideo />
          <div className="page-shell hero-content">
            <p className="eyebrow">Data Center, Hosting, And Server Solutions</p>
            <h1>From cloud-ready hosting to rack-level infrastructure.</h1>
            <p className="hero-copy">
              Launch faster, host stronger, and scale with confidence through
              VPS, dedicated servers, co-location, and managed web hosting
              services designed for serious business workloads.
            </p>
            <div className="hero-actions">
              <Link className="primary-button" href="/contact">
                Contact Us
              </Link>
              <Link className="secondary-button" href="/dedicated-server">
                Explore Servers
              </Link>
            </div>
          </div>
        </section>

        <section className="ticker-strip" aria-label="Infrastructure highlights">
          <div className="ticker-track">
            {[0, 1].map((group) => (
              <div className="ticker-group" aria-hidden={group === 1} key={group}>
                {tickerItems.map((item) => (
                  <span key={`${group}-${item}`}>{item}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="page-shell intro-grid">
          <div>
            <span className="red-rule" />
            <h2>Reliable infrastructure for modern digital operations.</h2>
          </div>
          <p>
            A high-performing website or application depends on more than a
            hosting plan. It needs clean architecture, dependable compute,
            careful migration, security basics, support visibility, and a
            growth path that does not collapse when traffic rises. Our platform
            brings those pieces together for teams that want practical,
            business-ready infrastructure without noise.
          </p>
        </section>

        <section className="page-shell service-grid-section">
          <div className="section-heading">
            <span className="red-rule" />
            <h2>Core Hosting And Data Center Services</h2>
            <p>
              Choose the infrastructure model that matches your application,
              control requirements, and growth stage.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.href}>
                <Image
                  alt={`${service.title} infrastructure`}
                  className="service-card-image"
                  height={220}
                  src={serviceImages[index]}
                  width={360}
                />
                <div className="service-icon">{service.title.slice(0, 2)}</div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Link href={service.href}>Discover more</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="page-shell operations-section">
          <div className="section-heading">
            <span className="red-rule" />
            <h2>How Atfenix moves a workload from idea to production.</h2>
            <p>
              The process is built to reduce guesswork: plan the workload,
              deploy the right infrastructure, monitor the important signals,
              and scale only when it makes technical and commercial sense.
            </p>
          </div>
          <div className="operations-grid">
            {processSteps.map((step, index) => (
              <article key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
                <p>
                  Each stage creates a cleaner handoff between business goals
                  and server requirements, so your site or application has a
                  stronger operating base.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-feature">
          <div className="feature-media">
            <Image
              alt="Dedicated server rack infrastructure"
              className="feature-image"
              fill
              sizes="(max-width: 980px) 100vw, 66vw"
              src="/landing-data-center.jpg"
            />
          </div>
          <div className="page-shell feature-copy">
            <span className="red-rule" />
            <h2>Powering tomorrow&apos;s data with disciplined operations.</h2>
            <p>
              We help businesses move from fragile hosting to a stronger
              infrastructure foundation. Whether you are moving a website,
              placing owned equipment, deploying a production server, or
              planning a hybrid environment, our process focuses on uptime,
              clarity, security, and predictable expansion.
            </p>
            <Link className="primary-button" href="/contact">
              Request consultation
            </Link>
          </div>
        </section>

        <section className="page-shell">
          <div className="section-heading">
            <span className="red-rule" />
            <h2>Highlights</h2>
          </div>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <div className="highlight-item" key={item}>
                <span />
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="page-shell command-center">
          <div className="command-visual">
            <Image
              alt="Network operations visualization"
              fill
              sizes="(max-width: 980px) 100vw, 45vw"
              src="/landing-network.png"
            />
          </div>
          <div>
            <span className="red-rule" />
            <h2>One partner for hosting, hardware, migration, and growth.</h2>
            <p>
              Instead of forcing every workload into the same package, Atfenix
              helps you select the right infrastructure lane. Small
              business websites can begin on managed hosting, applications can
              move to VPS, high-load systems can run on dedicated servers, and
              owned hardware can sit inside a co-location environment.
            </p>
            <p>
              This keeps the platform flexible. Your business can start with a
              lean setup, strengthen security and backups, introduce monitoring,
              and then upgrade capacity when real usage proves the need.
            </p>
          </div>
        </section>

        <section className="ai-operations-band">
          <Image
            alt="AI assisted infrastructure operations"
            fill
            priority={false}
            sizes="100vw"
            src="/landing-ai-robot.jpg"
          />
          <div className="page-shell ai-operations-copy">
            <span className="red-rule" />
            <h2>AI-ready infrastructure for smarter operations.</h2>
            <p>
              Modern hosting is moving toward automated monitoring, predictive
              capacity planning, and faster incident response. Atfenix gives
              your business a practical foundation for AI-assisted operations
              without losing human control over security, uptime, and cost.
            </p>
          </div>
        </section>

        <section className="page-shell long-copy">
          <span className="red-rule" />
          <h2>Why companies choose a stronger hosting partner</h2>
          <p>
            Many businesses begin online with basic shared hosting because it is
            easy to buy and simple to understand. That works for a while, but
            growth changes the equation. More visitors create pressure on CPU,
            memory, storage, database queries, background jobs, and security
            routines. Marketing campaigns create spikes. New integrations add
            traffic. Search engines reward faster experiences. Customers expect
            pages to load instantly and forms to submit without errors. At that
            stage, infrastructure becomes part of the customer experience.
          </p>
          <p>
            Our service model is built around that moment. We help you decide
            whether a managed web hosting plan is enough, whether a VPS gives
            the best balance, whether a dedicated server is the right production
            base, or whether co-location should be used for owned equipment. We
            also consider migration risk, DNS, SSL, backup windows, monitoring,
            operating system access, firewall policy, resource scaling, and
            long-term maintenance. The result is not just a server; it is a
            cleaner operating foundation for your digital business.
          </p>
          <p>
            A premium infrastructure partner should make technical decisions
            easier, not more confusing. We explain tradeoffs clearly, recommend
            practical capacity, and support the setup after launch. That gives
            founders, agencies, IT managers, and operations teams a reliable
            place to build, test, publish, and scale.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
