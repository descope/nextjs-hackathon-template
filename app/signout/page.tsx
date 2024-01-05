"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function SignOutCallback() {
  const router = useRouter();
  useEffect(() => {
    const performSignOut = async () => {
      await signOut({ redirect: false });
      router.push("/");
    };

    performSignOut();
  }, [router]);

  return <div>Signing out...</div>;
}
