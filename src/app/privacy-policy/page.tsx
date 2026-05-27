import { ContentPage } from "@/components/sections/content-page";
import { pageContent, pageMeta } from "@/lib/site-data";

const page = pageContent["privacy-policy"];

export const metadata = pageMeta("privacy-policy");

export default function PrivacyPolicyPage() {
  return <ContentPage {...page} variant="legal" />;
}
