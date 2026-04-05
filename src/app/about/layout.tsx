import type { Metadata } from "next";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Unmarkify works — a 100% client-side video watermark remover built with FFmpeg.wasm. No uploads, no data collection.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    url: `${SITE_URL}/about`,
    title: "About Unmarkify",
    description:
      "Learn how Unmarkify works — a 100% client-side video watermark remover built with FFmpeg.wasm.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    title: "About Unmarkify",
    description:
      "100% client-side video watermark remover built with FFmpeg.wasm. No uploads.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
