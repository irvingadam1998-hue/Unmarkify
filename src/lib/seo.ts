// Centralised SEO constants — set NEXT_PUBLIC_SITE_URL in your Railway environment variables
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://unmarkify.up.railway.app";

export const SITE_NAME = "Unmarkify";
export const SITE_DESCRIPTION =
  "Remove, blur or pixelate watermarks from videos directly in your browser. No uploads, no servers, 100% private.";

// Used as the default OG image. Place a 1200×630 PNG at public/og-image.png
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
