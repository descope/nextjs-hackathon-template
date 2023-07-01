import { Silkscreen } from 'next/font/google';
import { SponsorType } from '../_data/Sponsor';


const silkScreen = Silkscreen({
    subsets: ["latin"],
    style: "normal",
    weight: '400'
})


export default function Sponsors({ data }: { data: SponsorType[] }) {
    return (
        <div style={silkScreen.style} className='flex flex-col items-center justify-center h-full w-full py-20'>
            <p className='text-6xl mb-10'>Sponsors</p>
            <div className='flex flex-row items-center justify-center w-full flex-wrap'>
                {data.map((obj, i) => (
                    <div key={i} className='flex flex-row items-center justify-start mx-10'>
                        <img className='w-[20vw] object-cover' src={obj.img} alt="" />
                    </div>
                ))}         
            </div>
        </div>
    )
}
