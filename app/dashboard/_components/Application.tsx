import { Golos_Text } from 'next/font/google';


const golosText = Golos_Text({
    subsets: ["latin"],
    style: "normal",
    weight: '400'
})


export default function Application({ application }: { application: any }) {
    return (
        <div className='col bg-[#efefef] p-8 px-12 pb-12 shadow-xl'>
            <h1 className="text-4xl mb-8 text-blue-500">My Application</h1>
            <div className='bg-[#fafafa] p-6'>
                {Object.keys(application).map((app, i) => (
                    <div className={`mb-4 ${golosText.className}`}>
                        <p className='text-lg'>{app}</p>
                        <p className='text-xl'>{application[app]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
