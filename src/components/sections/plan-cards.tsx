import Link from "next/link";
import { BackendPlan, formatSpecLabel, formatSpecValue } from "@/lib/plans";

type PlanCardsProps = {
  plans: BackendPlan[];
  productLabel: string;
};

const importantSpecKeys = [
  "vcpu",
  "cpu_cores",
  "ram_gb",
  "storage_gb",
  "storage_type",
  "bandwidth_tb",
  "ipv4_count",
  "uplink_port",
  "rack_units",
  "power_amps"
];

function getPlanSpecs(plan: BackendPlan) {
  const specs = plan.specs || {};
  const selected = importantSpecKeys
    .filter((key) => specs[key] !== undefined)
    .slice(0, 5)
    .map((key) => ({
      label: formatSpecLabel(key),
      value: formatSpecValue(specs[key])
    }));

  if (selected.length > 0) {
    return selected;
  }

  return Object.entries(specs)
    .slice(0, 5)
    .map(([key, value]) => ({
      label: formatSpecLabel(key),
      value: formatSpecValue(value)
    }));
}

function formatPrice(price?: number) {
  if (price === undefined || price === null) {
    return "Custom";
  }

  return new Intl.NumberFormat("en-IN", {
    currency: "INR",
    maximumFractionDigits: 0,
    style: "currency"
  }).format(price);
}

export function PlanCards({ plans, productLabel }: PlanCardsProps) {
  return (
    <section className="page-shell plan-section">
      <div className="section-heading">
        <span className="red-rule" />
        <h2>{productLabel} plans</h2>
        <p>
          Live plans are loaded from the backend, so pricing and specifications
          stay current as the product catalog changes.
        </p>
      </div>

      {plans.length > 0 ? (
        <div className="plan-grid">
          {plans.map((plan) => {
            const specs = getPlanSpecs(plan);
            const monthly = plan.pricing?.monthly;

            return (
              <article
                className={`plan-card${plan.is_popular ? " plan-card-popular" : ""}`}
                key={plan.id}
              >
                {plan.is_popular && <span className="plan-badge">Popular</span>}
                <div className="plan-card-head">
                  <p>{plan.category || "Infrastructure"}</p>
                  <h3>{plan.name}</h3>
                  <span>{plan.tagline || plan.description}</span>
                </div>
                <div className="plan-price">
                  <strong>{formatPrice(monthly)}</strong>
                  {monthly !== undefined && <span>/ month</span>}
                </div>
                <dl className="plan-specs">
                  {specs.map((spec) => (
                    <div key={spec.label}>
                      <dt>{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="plan-features">
                  {(plan.features || []).slice(0, 5).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link
                  className="primary-button"
                  href={`/contact?service=${encodeURIComponent(productLabel)}&plan=${encodeURIComponent(plan.name)}`}
                >
                  Enquire Now
                </Link>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="plans-empty">
          <h3>Plans are being updated.</h3>
          <p>
            We could not load live plans right now. Send an enquiry and our team
            will share the current options.
          </p>
          <Link className="primary-button" href="/contact">
            Contact Sales
          </Link>
        </div>
      )}
    </section>
  );
}
