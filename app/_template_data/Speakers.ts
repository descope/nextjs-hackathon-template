import Face from '../_assets/speakers/jurica-koletic-7YVZYZeITc8-unsplash.jpg'


export type SpeakerType = {
    name: string,
    position: string,
    img: string
}


export const SpeakerList: SpeakerType[] = [
    {
        name: "Miro Glassy",
        position: "Unknown Software Developer",
        img: Face.src
    },
    {
        name: "Pascal Niroclo",
        position: "Unknown Big Tech CEO",
        img: Face.src
    },
    {
        name: "James Wordly",
        position: "Building Unknown",
        img: Face.src
    },
    {
        "name": "Vet Coco",
        "position": "Veteran Hacker",
        "img": Face.src
    },
    {
        "name": "Justin Calisito",
        "position": "Unknown Pop Artist",
        "img": Face.src
    },
    {
        "name": "Zed Mirman",
        "position": "Unknown Professional Pro",
        "img": Face.src
    }
]