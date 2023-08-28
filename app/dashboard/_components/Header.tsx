"use client";

import { signOut } from "next-auth/react";

export default function Header() {
  return (
    <div className="row justify-between mb-8">
      <h1 className="title mb-0">Hacker Dashboard</h1>
      <button
        className="bg-red-500 text-white py-3 px-6 max-md:mt-6"
        onClick={async () => {
          await signOut();
          window.location.href = `/api/auth/federated-sign-out`;
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
