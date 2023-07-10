export default function Intro() {

    return (
        <div className='flex flex-col items-center justify-center h-screen w-full py-10'>
            <h1 className='text-9xl m-0 p-0 text-gray-800'><span className='text-white'>Auth</span>Hacks</h1>
            <p className='my-4'>The next fight is not in our <span className='text-blue-300'>skies</span>, <span className='text-yellow-600'>land</span>, or <span className='text-indigo-500'>seas</span>. It's in the <span className='text-gray-400'>digital world</span>. Join the battle.</p>
            <div className='flex flex-row items-center justify-center'>
                <p className='bg-gray-800 px-4 py-2 mx-2 my-2'>September 3rd 2023 | In-Person</p>
            </div>
            {/* waitlist sign up here */}
        </div>
    )
}
