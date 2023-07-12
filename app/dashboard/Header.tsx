'use client'

import { useSession, signOut } from "next-auth/react";

import "../globals.css"


export default function Header() {
    const { data: session } = useSession()

    return (
        <div className="row justify-around mb-8">
            <h1 className="title mb-0">{session?.user.role} Dashboard</h1>
            <button className="bg-red-500 text-white py-3 px-6 max-md:mt-6" onClick={() => signOut()}>Sign Out</button>
        </div>
    )
}
