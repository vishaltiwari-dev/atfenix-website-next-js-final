import { ContentPage } from "@/components/sections/content-page";
import { fetchProductPlans } from "@/lib/plans";
import { pageContent, pageMeta } from "@/lib/site-data";

const page = pageContent["co-locations"];

export const metadata = pageMeta("co-locations");
export const dynamic = "force-dynamic";

export default async function CoLocationsPage() {
  const { productType, plans } = await fetchProductPlans([
    "co-location",
    "colocation",
    "co-locations"
  ]);

  return (
    <ContentPage
      {...page}
      heroImage="/hero-co-location.jpg"
      plans={plans}
      productLabel={productType?.name || "Co-location"}
      variant="service"
    />
  );
}
