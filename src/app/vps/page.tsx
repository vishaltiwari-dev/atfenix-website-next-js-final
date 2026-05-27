import { ContentPage } from "@/components/sections/content-page";
import { fetchProductPlans } from "@/lib/plans";
import { pageContent, pageMeta } from "@/lib/site-data";

const page = pageContent.vps;

export const metadata = pageMeta("vps");
export const dynamic = "force-dynamic";

export default async function VpsPage() {
  const { productType, plans } = await fetchProductPlans("vm");

  return (
    <ContentPage
      {...page}
      heroImage="/hero-vps.jpg"
      plans={plans}
      productLabel={productType?.name || "Virtual Machine"}
      variant="service"
    />
  );
}
