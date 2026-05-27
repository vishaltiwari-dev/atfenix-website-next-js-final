import { ContentPage } from "@/components/sections/content-page";
import { pageContent, pageMeta } from "@/lib/site-data";

const page = pageContent["terms-and-conditions"];

export const metadata = pageMeta("terms-and-conditions");

export default function TermsAndConditionsPage() {
  return <ContentPage {...page} variant="legal" />;
}
