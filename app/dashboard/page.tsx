import "../globals.css"

import Header from "./Header";


export default function Dashboard() {
    return (
        <div className='page space'>
            <div className="w-[90%]">
                <Header />
                <div className="col">
                    <p className="px-8 py-6 w-full bg-[#e2e2e2] text-2xl">Status: <span>Application Pending</span></p>
                </div>
            </div>
        </div>
    )
}
