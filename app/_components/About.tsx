"use client";

import AboutImage from "../_assets/umberto-deb2EnbWPr8-unsplash.jpg"
import { Silkscreen } from 'next/font/google';


const silkScreen = Silkscreen({
    subsets: ["latin"],
    style: "normal",
    weight: '400'
})


export default function About() {

    return (
        <div style={silkScreen.style} className='flex flex-col items-center justify-center h-full w-full py-20'>
            <div className='grid grid-cols-2 w-full gap-7'>
                <div className='flex flex-col items-start justify-center w-full'> 
                    <img className="w-[40vw]" src={AboutImage.src} alt="" />
                </div>
                <div className='flex flex-col justify-center w-full'>
                    <div className="w-[90%]">
                        <p className="text-6xl mb-20">About AuthHacks</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <br />
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                            unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
