export type DayType = {
    time: string,
    description: string
}


export type ScheduleType = {
    date: string,
    events: DayType[],
}


export const ScheduleList: ScheduleType[] = [
    {
        date: "Monday July 10 2023",
        events: [
            {
                time: "12:00 PM",
                description: "Speaker Event 1"
            },
            {
                time: "1:00 PM",
                description: "Event 2"
            }
        ]
    },
    {
        "date": "Tuesday July 11 2023",
        "events": [
            {
                "time": "12:00 PM",
                "description": "Speaker Event 1"
            },
            {
                "time": "1:00 PM",
                "description": "Event 2"
            }
        ]
    },
]