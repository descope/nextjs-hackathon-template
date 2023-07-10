import { SpeakerType } from '../template_data/Speakers';


export default function Speakers({ data }: { data: SpeakerType[] }) {
    return (
        <div className='flex flex-col items-center justify-center h-full w-full py-20'>
            <p className='text-6xl mb-10'>Speakers</p>
            <div className='flex flex-row justify-center items-start w-full flex-wrap'>
                {data.map((obj, i) => (
                    <div key={i} className='flex flex-row items-center w-[30%] flex-wrap justify-start m-3 bg-gray-950'>
                        <div className='flex flex-col flex-1 max-md:flex-none w-full'>
                            <img className='w-[20vh] h-[20vh] object-cover' src={obj.img} alt="" />
                        </div>
                        <div className='flex flex-col flex-1 max-md:flex-none ml-6 w-full'>
                            <p>{obj.name}</p>
                            <p>{obj.position}</p>
                        </div>
                    </div>
                ))}         
            </div>
        </div>
    )
}
