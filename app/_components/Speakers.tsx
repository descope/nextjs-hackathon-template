import Image from "next/image"
import { SpeakerType } from '../_template_data/Speakers'


export default function Speakers({ data }: { data: SpeakerType[] }) {
    return (
        <div id="speakers" className='page component'>
            <p className='title'>Speakers</p>
            <div className='row items-start w-full'>
                {data.map((obj, i) => (
                    <div key={i} className='row h-full w-[30%] max-md:w-[90%] m-3 bg-gray-200'>
                        <div className='col flex-1 max-md:flex-none'>
                            <Image
                                src={obj.img}
                                alt="speaker img"
                                width={200}
                                height={160}
                                className="w-[20vh] h-[20vh] max-md:w-full max-md:h-full object-cover"
                                placeholder="blur"
                                blurDataURL={obj.img}
                            />
                        </div>
                        <div className='col flex-1 max-md:flex-none p-6'>
                            <p className="mb-3 text-[#3f9eda]">{obj.name}</p>
                            <p>{obj.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
