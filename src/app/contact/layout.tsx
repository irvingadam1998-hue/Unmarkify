import type { Metadata } from "next";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Unmarkify team for support, feedback, or partnership enquiries.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: "Contact Unmarkify",
    description: "Get in touch with the Unmarkify team for support or feedback.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
