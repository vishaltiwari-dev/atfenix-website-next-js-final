import { ContentPage } from "@/components/sections/content-page";
import { pageContent, pageMeta } from "@/lib/site-data";

const page = pageContent["about-us"];

export const metadata = pageMeta("about-us");

export default function AboutUsPage() {
  return <ContentPage {...page} variant="about" />;
}
