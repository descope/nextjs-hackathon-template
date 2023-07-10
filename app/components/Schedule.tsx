import { ScheduleType } from '../template_data/Schedule';


export default function Schedule({ data }: { data: ScheduleType[] }) {
    return (
        <div className='flex flex-col items-center justify-center h-full w-full py-20'>
            <p className='text-6xl'>Schedule</p>
            <div className='flex flex-row items-start justify-evenly flex-wrap w-full'>
                {data.map((schedule, i) => (
                    <div className='flex flex-col flex-1 max-md:flex-none mx-3'>
                        <p className='text-2xl mb-3'>{schedule.date}</p>
                        <div>
                            {schedule.events.map((event, i) => (
                                <div className='flex flex-col justify-center align-start my-3 bg-gray-800 py-2 pl-5'>
                                    <p className='text-xl mb-3'>{event.time}</p>
                                    <p>{event.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
