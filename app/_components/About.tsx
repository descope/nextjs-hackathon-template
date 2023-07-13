import "../globals.css"


export default function About({ AboutImage }: { AboutImage: string }) {
    return (
        <div className='page component'>
            <div className='row'>
                <div className='col flex-1 max-md:flex-none items-center justify-center'>
                    <img className="w-[40vw] max-md:w-full max-md:mb-10 border-gray-800 border-8" src={AboutImage} alt="" />
                </div>
                <div className='col flex-1 max-md:flex-none items-center justify-center'>
                    <div className="col w-[90%]">
                        <p className="title justify-start mb-20 text-gray-800">About <span className='text-[#37c598]'>Auth</span>Hacks</p>
                        <p className="text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <br />
                        <p className="text-xl">
                            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
