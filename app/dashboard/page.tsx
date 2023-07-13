import Header from "./Header";


export default async function Dashboard() {
    const data = await fetch('http://localhost:3000/api/airtable')
    console.log(data)

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
