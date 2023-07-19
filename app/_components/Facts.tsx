export default function Facts() {
    return (
        <div id="facts" className='page component pt-0'>
            <div className='row justify-evenly h-full w-full'>
                <div className="max-md:w-[90%]">
                    <p className='text-2xl text-red-700'>Hackers</p>
                    <p className='text-7xl text-red-500'>100</p>
                </div>
                <div className="max-md:w-[90%] max-md:mt-10">
                    <p className='text-2xl text-amber-600'>Projects</p>
                    <p className='text-7xl text-amber-500'>100</p>
                </div>
                <div className="max-md:w-[90%] max-md:mt-10">
                    <p className='text-2xl text-blue-700'>Workshops</p>
                    <p className='text-7xl text-blue-600'>100</p>
                </div>
                <div className="max-md:w-[90%] max-md:mt-10">
                    <p className='text-2xl text-green-700'>Prizes</p>
                    <p className='text-7xl text-green-600'>$15000</p>
                </div>
            </div>
        </div>
    )
}
