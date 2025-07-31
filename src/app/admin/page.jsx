"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to external admin URL
    router.push("https://admin.winrh2026.org");
  }, [router]);

  return (
    <div>
      <p>Redirecting to admin dashboard...</p>
    </div>
  );
}
