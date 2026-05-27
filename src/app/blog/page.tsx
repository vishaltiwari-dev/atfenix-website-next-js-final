import { ContentPage } from "@/components/sections/content-page";
import { pageContent, pageMeta } from "@/lib/site-data";

const page = pageContent.blog;

export const metadata = pageMeta("blog");

export default function BlogPage() {
  return <ContentPage {...page} variant="blog" />;
}
