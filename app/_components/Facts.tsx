"use client";

import { Silkscreen } from 'next/font/google';


const silkScreen = Silkscreen({
    subsets: ["latin"],
    style: "normal",
    weight: '400'
})


export default function Facts() {

    return (
        <div style={silkScreen.style} className='flex flex-col items-center justify-center h-full w-full pb-20'>
            <div className='flex flex-row items-center justify-evenly h-full w-full'>
                <div>
                    <p className='text-2xl'>Hackers</p>
                    <p className='text-7xl'>100</p>
                </div>
                <div>
                    <p className='text-2xl'>Projects</p>
                    <p className='text-7xl'>100</p>
                </div>
                <div>
                    <p className='text-2xl'>Workshops</p>
                    <p className='text-7xl'>100</p>
                </div>
                <div>
                    <p className='text-2xl'>Prizes</p>
                    <p className='text-7xl'>$15000</p>
                </div>
            </div>
        </div>
    )
}
