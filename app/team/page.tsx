'use client'
import { useSession } from "next-auth/react";


export default function Team() {
	const { data: session } = useSession();

	const tenants = session?.tenants || [];
    return (
        <div className='page h-full mt-[18vh] mb-[12vh]'>
            <h1 className='title'>Team</h1>
            <div className="flex flex-row w-full items-start justify-center h-full">
               tenants: {JSON.stringify(tenants || [], null, 2)}
            </div>
        </div>
    )
}
