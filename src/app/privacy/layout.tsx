import type { Metadata } from "next";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Unmarkify privacy policy — your videos never leave your device. No data is collected or stored.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  // Discourage Google from featuring the privacy page in snippets
  robots: { index: true, follow: true },
  openGraph: {
    url: `${SITE_URL}/privacy`,
    title: "Privacy Policy – Unmarkify",
    description: "Your videos never leave your device. No data collected.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
