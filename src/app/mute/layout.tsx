import type { Metadata } from "next";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mute Video",
  description:
    "Remove audio from any video instantly in your browser. No upload needed — fully private.",
  alternates: { canonical: `${SITE_URL}/mute` },
  openGraph: {
    url: `${SITE_URL}/mute`,
    title: "Mute Video Online – Unmarkify",
    description: "Remove audio from videos in-browser. No upload, 100% private.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    title: "Mute Video Online – Unmarkify",
    description: "Remove audio from videos in-browser. No upload, 100% private.",
  },
};

export default function MuteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
