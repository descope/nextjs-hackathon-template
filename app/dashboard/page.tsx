"use client"


import { signOut } from "next-auth/react";

import "../globals.css"


export default function Dashboard() {

    return (
        <div className='page h-full mt-[18vh] mb-[12vh]'>
            <div className="w-[90%]">
                <div className="row justify-around mb-8">
                    <h1 className="title mb-0">Dashboard</h1>
                    <button className="bg-red-500 text-white py-3 px-6 max-md:mt-6" onClick={() => signOut()}>Sign Out</button>
                </div>
                <div className="col">
                    <p className="px-8 py-6 w-full bg-[#e2e2e2] text-2xl">Status: <span>Application Pending</span></p>
                </div>
            </div>
        </div>
    )
}
