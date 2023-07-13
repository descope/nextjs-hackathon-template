import Image from "next/image"


export default function Bottom({ Logo }: { Logo: string }) {
    return (
        <div className='row justify-between px-4 py-4 bottom-0 w-full bg-[#1d242b]'>
            <div>
                <Image
                    src={Logo}
                    alt="bottom navbar logo"
                    width={200}
                    height={160}
                    className="w-12 h-12 m-6"
                />
            </div>
            <div className='row items-start h-full py-6 max-md:col text-white'>
                <a className="m-6" href="#">Instagram</a>
                <a className="m-6" href="#">LinkedIn</a>
                <a className="m-6" href="#">Twitter</a>
                <a className="m-6" href="#">Facebook</a>
            </div>
        </div>
    )
}
