import { ScheduleType } from '../_template_data/Schedule'


export default function Schedule({ data }: { data: ScheduleType[] }) {
    return (
        <div id='schedule' className='page component'>
            <p className='title'>Schedule</p>
            <div className='row items-start justify-evenly w-full'>
                {data.map((schedule, i) => (
                    <div key={i} className='flex flex-col flex-1 max-md:flex-none max-md:mb-12 w-[95%] mx-3'>
                        <p className='text-2xl mb-3 text-[#8142df]'>{schedule.date}</p>
                        <div>
                            {schedule.events.map((event, i) => (
                                <div key={i} className='col align-start my-3 bg-[#202020] text-[#e7e7e7] py-6 pb-7 pl-7'>
                                    <p className='text-xl mb-3 text-[#994ef5]'>{event.time}</p>
                                    <p className='w-[90%]'>{event.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
