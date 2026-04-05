import type { Metadata } from "next";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Rotate Video",
  description:
    "Rotate your video 90°, 180° or 270° in seconds — directly in your browser. No upload required.",
  alternates: { canonical: `${SITE_URL}/rotate` },
  openGraph: {
    url: `${SITE_URL}/rotate`,
    title: "Rotate Video Online – Unmarkify",
    description: "Rotate videos in-browser without uploading. Fast, free and private.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    title: "Rotate Video Online – Unmarkify",
    description: "Rotate videos in-browser. No upload, 100% private.",
  },
};

export default function RotateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
