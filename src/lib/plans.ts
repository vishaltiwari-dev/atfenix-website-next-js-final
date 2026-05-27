export type BillingCycle = "monthly" | "quarterly" | "half_yearly" | "yearly";

export type BackendPlan = {
  id: number;
  name: string;
  slug: string;
  description: string;
  tagline?: string;
  category?: string;
  is_popular?: boolean;
  is_active?: boolean;
  sort_order?: number;
  pricing?: Partial<Record<BillingCycle | "setup_fee", number>>;
  specs?: Record<string, unknown>;
  features?: string[];
};

type ProductTypeResponse = {
  success: boolean;
  data?: {
    product_type?: {
      name: string;
      slug: string;
      description?: string;
      plans?: BackendPlan[];
    };
    plans?: BackendPlan[];
  };
};

const API_BASE_URL = "https://api.atfenix.com";

export async function fetchProductPlans(productTypeSlugs: string | string[]) {
  const slugs = Array.isArray(productTypeSlugs) ? productTypeSlugs : [productTypeSlugs];

  for (const slug of slugs) {
    try {
      const response = await fetch(`${API_BASE_URL}/plans/product-type/${slug}`, {
        cache: "no-store"
      });

      if (!response.ok) {
        continue;
      }

      const result = (await response.json()) as ProductTypeResponse;
      const plans = result.data?.plans || result.data?.product_type?.plans || [];

      if (result.success && plans.length > 0) {
        return {
          productType: result.data?.product_type,
          plans: plans
            .filter((plan) => plan.is_active !== false)
            .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
        };
      }
    } catch (error) {
      console.error(`Plan fetch failed for product type: ${slug}`, error);
    }
  }

  return {
    productType: undefined,
    plans: []
  };
}

export function formatSpecLabel(key: string) {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace("Gb", "GB")
    .replace("Tb", "TB")
    .replace("Cpu", "CPU")
    .replace("Ipv4", "IPv4");
}

export function formatSpecValue(value: unknown) {
  if (Array.isArray(value)) {
    return value.join(", ");
  }

  if (typeof value === "boolean") {
    return value ? "Included" : "Not included";
  }

  return String(value);
}
