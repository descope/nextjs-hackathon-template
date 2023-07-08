import Logo from "../_assets/icons8-pixel-heart-100.png"
import Link from 'next/link';
import { Silkscreen } from 'next/font/google';


const silkScreen = Silkscreen({
    subsets: ["latin"],
    style: "normal",
    weight: '400'
})


export default function Navbar() {

    return (
        <div style={silkScreen.style} className='flex flex-row items-center justify-center px-4 py-4 top-0 w-full'>
            <div>
                <img className="w-12 h-12 mx-6" src={Logo.src} alt="navbar-logo" />
            </div>
            <div className='flex flex-row items-center justify-center h-full w-full py-6'>
                <a className="mx-6" href="#">About</a>
                <a className="mx-6" href="#">Speakers</a>
                <a className="mx-6" href="#">Sponsors</a>
                <a className="mx-6" href="#">FAQ</a>
            </div>
            <Link href={"/signin"} className="mx-6">Login</Link>
        </div>
    )
}
