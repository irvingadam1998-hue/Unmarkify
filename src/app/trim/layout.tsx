import type { Metadata } from "next";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Trim Video",
  description:
    "Cut and trim your video to the exact length you need — in your browser, no upload required.",
  alternates: { canonical: `${SITE_URL}/trim` },
  openGraph: {
    url: `${SITE_URL}/trim`,
    title: "Trim Video Online – Unmarkify",
    description: "Trim videos in-browser without uploading. Fast, free and private.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    title: "Trim Video Online – Unmarkify",
    description: "Trim videos in-browser. No upload, 100% private.",
  },
};

export default function TrimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
