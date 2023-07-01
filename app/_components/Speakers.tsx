import { Silkscreen } from 'next/font/google';
import { SpeakerType } from '../_data/Speakers';


const silkScreen = Silkscreen({
    subsets: ["latin"],
    style: "normal",
    weight: '400'
})


export default function Speakers({ data }: { data: SpeakerType[] }) {
    return (
        <div style={silkScreen.style} className='flex flex-col items-center justify-center h-full w-full py-20'>
            <p className='text-6xl mb-10'>Speakers</p>
            <div className='grid grid-cols-3'>
                {data.map((obj, i) => (
                    <div key={i} className='flex flex-row items-center justify-start m-3 bg-gray-950'>
                        <img className='w-[20vh] h-[20vh] object-cover' src={obj.img} alt="" />
                        <div className='ml-6 w-full'>
                            <p>{obj.name}</p>
                            <p>{obj.position}</p>
                        </div>
                    </div>
                ))}         
            </div>
        </div>
    )
}
