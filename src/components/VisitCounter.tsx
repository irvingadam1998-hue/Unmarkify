"use client";

import { useEffect, useState } from "react";

const IS_PROD = process.env.NEXT_PUBLIC_APP_ENV === "prod";

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!IS_PROD) return; // solo cuenta en producción
    fetch("https://api.countapi.xyz/hit/unmarkify-app/visitas")
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => {}); // fallo silencioso — no rompe la UI
  }, []);

  if (count === null) return null;

  return (
    <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <span style={{ opacity: 0.5 }}>👁</span>
      {count.toLocaleString()} visits
    </span>
  );
}
