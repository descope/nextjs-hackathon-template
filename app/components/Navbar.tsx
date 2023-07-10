'use client'


import Logo from "../assets/icons8-pixel-heart-100.png"
import Link from 'next/link';
import { signOut, useSession } from "next-auth/react";


export default function Navbar() {
    const { data: session, status } = useSession()

    return (
        <div className='flex flex-row items-center justify-around px-4 py-4 top-0 w-full'>
            <div>
                <Link href={"/"} className="mx-6">
                    <img className="w-12 h-12" src={Logo.src} alt="navbar-logo" />
                </Link>
            </div>
            <div className='flex flex-row items-center justify-center h-full py-6'>
                <a className="mx-6" href="#">About</a>
                <a className="mx-6" href="#">Speakers</a>
                <a className="mx-6" href="#">Sponsors</a>
                <a className="mx-6" href="#">FAQ</a>
                <Link href={"/team"} className="mx-6">Team</Link>
            </div>
            <Link href={"/dashboard"} className="mx-6">{session ? "Dashboard" : "Login"}</Link>
        </div>
    )
}
