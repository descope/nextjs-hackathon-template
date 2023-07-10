import Pfp from '../assets/team/pfp.png'


export type TeamType = {
    "image": string
    "name": string,
    "role": string,
    "linkedin": string,
    "twitter": string,
    "facebook": string,
    "website": string,
}


export const TeamList: TeamType[] = [
    {
        "image": Pfp.src,
        "name": "Eric",
        "role": "Creator",
        "linkedin": "/in/eric-sheen/",
        "twitter": "/eric",
        "facebook": "/eric",
        "website": "ericsheen.netlify.app"
    }
]