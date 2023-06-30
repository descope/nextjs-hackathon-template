"use client";

import styles from "./styles/Animation.module.css"
import { MouseEvent, useState, Dispatch, SetStateAction } from 'react'
import { Silkscreen } from 'next/font/google';


const silkScreen = Silkscreen({
    subsets: ["latin"],
    style: "normal",
    weight: '400'
})


export default function Loading({ setTriggerLoading }: { setTriggerLoading: Dispatch<SetStateAction<boolean>> }) {
    const [loadingBar, setLoadingBar] = useState(false);
    const [allowAccess, setAllowAccess] = useState(false);
    const [error, setError] = useState(false);

    const handleLoadClick = async (e: MouseEvent) => {
        e.preventDefault();
        setLoadingBar(true)
        setTimeout(() => setAllowAccess(true), 3000); // wait 8 seconds to do something
        setTimeout(() => setError(true), 4000); // wait 8 seconds to do something
        setTimeout(() => setTriggerLoading(false), 5000)
    }   

    return (
        <div style={silkScreen.style} className='flex flex-col items-center justify-center h-screen w-full'>
            {!error ? 
                <>
                    <div>
                        <button onClick={(e) => handleLoadClick(e)} className={allowAccess ? "py-4 px-8 bg-green-500 mb-8" : "py-4 px-8 bg-red-600 mb-8"}>Secure Connection</button>
                    </div>
                    <div className='inline-block mb-8'>
                        <p className={styles.typed}>Welcome to AuthHacks. Secure connection to continue.</p>
                    </div>
                    {loadingBar &&
                        <div className="absolute mt-[27vh] w-7/12">
                            <div className={styles.loading}></div>
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
