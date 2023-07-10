import { TeamList, TeamType } from "../template_data/Team"


export default function Team({ data }: { data: TeamType[] }) {

    return (
        <div className='flex flex-col items-center justify-center h-full w-full py-10'>
            <h1 className='text-6xl'>Team</h1>
            <div className="flex flex-row items-start justify-center">
                {TeamList.map((person, i) => (
                    <div key={i} className="w-1/4">
                        <img className="w-full" src={person.image} alt="pfp" />
                        <p className="mb-3">{person.name} / {person.role}</p>
                        <p className="mb-1">{person.linkedin}</p>
                        <p className="mb-1">{person.facebook}</p>
                        <p className="mb-1">{person.website}</p>
                        <p className="mb-1">{person.twitter}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
