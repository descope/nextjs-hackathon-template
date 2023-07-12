import Face from '../_assets/speakers/jurica-koletic-7YVZYZeITc8-unsplash.jpg'


export type SpeakerType = {
    "name": string,
    "position": string,
    "img": string
}


export const SpeakerList: SpeakerType[] = [
    {
        "name": "Jack Sully",
        "position": "Software Developer",
        "img": Face.src
    },
    {
        "name": "Elon Musk",
        "position": "CEO of Tesla",
        "img": Face.src
    },
    {
        "name": "John Doe",
        "position": "Roblox Developer",
        "img": Face.src
    },
    {
        "name": "Lebron James",
        "position": "NBA Basketball Player",
        "img": Face.src
    },
    {
        "name": "Justin Beiber",
        "position": "Artist",
        "img": Face.src
    },
    {
        "name": "Justin Beiber",
        "position": "Artist",
        "img": Face.src
    }
]