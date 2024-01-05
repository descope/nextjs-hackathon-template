"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="row justify-between mb-8">
      <h1 className="title mb-0">Hacker Dashboard</h1>
      <button
        className="bg-red-500 text-white py-3 px-6 max-md:mt-6"
        onClick={async () => {
          try {
            await fetch("/api/auth/federated-sign-out").then(() => {
              signOut({ redirect: false });
              router.push("/");
            });
          } catch (error) {
            console.error("Error during sign out:", error);
          }
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
