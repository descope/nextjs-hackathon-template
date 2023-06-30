"use client";

import Logo from "../_assets/logo.png"
import { Golos_Text } from 'next/font/google';
import { Silkscreen } from 'next/font/google';


const silkScreen = Silkscreen({
    subsets: ["latin"],
    style: "normal",
    weight: '400'
})


export default function Navbar() {

    return (
        <div style={silkScreen.style} className='flex flex-row items-center justify-center h-full w-full justify-evenly py-6'>
            <img className="w-14 h-14 mx-6" src={Logo.src} alt="navbar-logo" />
            <div>
                <a className="mx-6" href="#">About</a>
                <a className="mx-6" href="#">Speakers</a>
                <a className="mx-6" href="#">FAQ</a>
                <button>Login</button>
            </div>
        </div>
    )
}
