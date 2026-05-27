import { ContentPage } from "@/components/sections/content-page";
import { pageContent, pageMeta } from "@/lib/site-data";

const page = pageContent["web-hosting"];

export const metadata = pageMeta("web-hosting");

export default function WebHostingPage() {
  return (
    <ContentPage
      {...page}
      sections={[
        {
          title: "Coming Soon",
          body:
            "Our web hosting packages are under work and will be available soon. For now, contact the team if you need help choosing VPS, dedicated server, or co-location options."
        }
      ]}
      variant="service"
    />
  );
}
