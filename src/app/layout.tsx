import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://atfenix.com"),
  title: {
    default: "Atfenix | VPS, Dedicated Servers, Co-location And Web Hosting",
    template: "%s | Atfenix"
  },
  description:
    "Premium VPS, dedicated server, co-location, and web hosting solutions for modern businesses.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png"
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Atfenix",
    description:
      "Premium VPS, dedicated server, co-location, and web hosting solutions for modern businesses.",
    url: "/",
    siteName: "Atfenix",
    images: [
      {
        url: "/logo-cropped.png",
        width: 1262,
        height: 335,
        alt: "Atfenix"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Atfenix",
    description:
      "Premium VPS, dedicated server, co-location, and web hosting solutions for modern businesses.",
    images: ["/logo-cropped.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
