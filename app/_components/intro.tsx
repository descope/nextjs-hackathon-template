"use client";

import { Golos_Text } from 'next/font/google';
import { Silkscreen } from 'next/font/google';


const silkScreen = Silkscreen({
    subsets: ["latin"],
    style: "normal",
    weight: '400'
})


export default function Intro() {

    return (
        <div className='flex flex-col items-center justify-center h-full w-full'>
            <div>
                <div>
                    <h1 style={silkScreen.style} className='text-7xl'>AuthHacks</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text.</p>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}
