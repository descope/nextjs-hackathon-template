import Image from "next/image"
import { TeamList } from "../_template_data/Team"


export default function Team() {
    return (
        <div className='page h-full mt-[18vh] mb-[12vh]'>
            <h1 className='title'>Team</h1>
            <div className="flex flex-row items-start justify-center h-full">
                {TeamList.map((person, i) => (
                    <div key={i} className="w-1/4 max-md:w-[80%]">
                        <Image 
                            src={person.image}
                            alt="pfp"
                            width={200}
                            height={160}
                            className="w-full"
                        />                    
                        <div className="w-full break-all">
                            <p className="my-4 text-2xl">{person.name} / <span className='text-[#207ceb]'>{person.role}</span></p>
                            <p className="mb-1 bg-blue-100 p-4">{person.linkedin}</p>
                            <p className="mb-1 bg-blue-200 p-4">{person.facebook}</p>
                            <p className="mb-1 bg-blue-300 p-4">{person.website}</p>
                            <p className="mb-1 bg-blue-400 p-4">{person.twitter}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
