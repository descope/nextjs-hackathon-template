"use client";

import "../globals.css"

import { MouseEvent, useState } from 'react'


export default function Loading({ splashScreen }: { splashScreen: () => void }) {
    const [loadingBar, setLoadingBar] = useState(false);
    const [allowAccess, setAllowAccess] = useState(false);
    const [error, setError] = useState(false);

    const handleLoadClick = (e: MouseEvent) => {
        e.preventDefault();
        setLoadingBar(true)
        setTimeout(() => setAllowAccess(true), 3000); 
        setTimeout(() => setError(true), 4000); 
        setTimeout(() => splashScreen(), 5000)
    }   

    return (
        <div className='page h-screen'>
            {!error ? 
                <>
                    <div>
                        <button onClick={(e) => handleLoadClick(e)} className={allowAccess ? "py-4 px-8 bg-green-500 mb-8" : "py-4 px-8 bg-red-600 mb-8"}>Secure Connection</button>
                    </div>
                    <div className='inline-block mb-8'>
                        <p className="border-gray-50 overflow-hidden whitespace-nowrap border-r-[10px] w-0 max-w-prose text-base animate-typing-animation">Welcome to AuthHacks. Secure connection to continue.</p>
                    </div>
                    {loadingBar &&
                        <div className="absolute mt-[27vh] w-7/12">
                            <div className="w-full inline-block relative bg-[#333333] h-[15px] overflow-hidden after:content-[''] after:box-border after:w-0 after:bg-gray-200 after:absolute after:h-[15px] after:animate-loading-animation"></div>
                            <p className={allowAccess ? "mt-4 text-sm text-green-400" : "mt-4 text-sm text-red-500"}>Loading</p>
                        </div>
                    }                        
                </>
            :
                <>
                    <p className="text-6xl max-w-full">Rebooting...</p>
                </>
            }
        </div>
    )
}
