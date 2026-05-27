import { ContentPage } from "@/components/sections/content-page";
import { fetchProductPlans } from "@/lib/plans";
import { pageContent, pageMeta } from "@/lib/site-data";

const page = pageContent["dedicated-server"];

export const metadata = pageMeta("dedicated-server");
export const dynamic = "force-dynamic";

export default async function DedicatedServerPage() {
  const { productType, plans } = await fetchProductPlans("dedicated-server");

  return (
    <ContentPage
      {...page}
      heroImage="/hero-dedicated-server.jpg"
      plans={plans}
      productLabel={productType?.name || "Dedicated Server"}
      variant="service"
    />
  );
}
