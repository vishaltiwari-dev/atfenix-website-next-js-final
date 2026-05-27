import Image from "next/image";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PlanCards } from "@/components/sections/plan-cards";
import { ServerVisual } from "@/components/sections/server-visual";
import { processSteps, serviceStats } from "@/lib/site-data";
import { BackendPlan } from "@/lib/plans";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{ title: string; body: string }>;
  variant?: "service" | "blog" | "about" | "legal";
  plans?: BackendPlan[];
  productLabel?: string;
  heroImage?: string;
};

export function ContentPage({
  eyebrow,
  title,
  intro,
  sections,
  variant = "service",
  plans,
  productLabel,
  heroImage
}: ContentPageProps) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className={`inner-hero inner-hero-${variant}`}>
          {heroImage ? (
            <div className="inner-hero-image" aria-hidden="true">
              <Image
                alt=""
                fill
                priority
                sizes="100vw"
                src={heroImage}
              />
              <span />
            </div>
          ) : (
            <ServerVisual />
          )}
          <div className="page-shell inner-hero-content">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
        </section>
        {variant === "service" && (
          <>
            <section className="page-shell stats-band">
              {serviceStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </section>
            {plans && (
              <PlanCards plans={plans} productLabel={productLabel || eyebrow} />
            )}
            <section className="page-shell service-detail-layout">
              <div className="service-detail-main">
                {sections.map((section, index) => (
                  <article className="service-detail-panel" key={section.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h2>{section.title}</h2>
                    <p>{section.body}</p>
                  </article>
                ))}
              </div>
              <aside className="process-card">
                <span className="red-rule" />
                <h2>Deployment Flow</h2>
                {processSteps.map((step) => (
                  <p key={step}>{step}</p>
                ))}
              </aside>
            </section>
          </>
        )}

        {variant === "blog" && (
          <section className="page-shell blog-layout">
            {sections.map((section, index) => (
              <article className="blog-post-card" key={section.title}>
                <span>Article {index + 1}</span>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </article>
            ))}
          </section>
        )}

        {variant === "about" && (
          <section className="page-shell about-layout">
            <div className="about-statement">
              <span className="red-rule" />
              <h2>Infrastructure with clarity, control, and support.</h2>
              <p>
                Atfenix is built for teams that want direct infrastructure
                guidance without unnecessary complexity.
              </p>
            </div>
            <div className="about-timeline">
              {sections.map((section, index) => (
                <article key={section.title}>
                  <span>{index + 1}</span>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {variant === "legal" && (
          <section className="page-shell legal-document">
            <div className="legal-intro">
              <span className="red-rule" />
              <h2>Plain-language policy information</h2>
              <p>
                This page is structured for clear reading on desktop and mobile
                screens.
              </p>
            </div>
            {sections.map((section) => (
              <article className="text-panel" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </article>
            ))}
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
