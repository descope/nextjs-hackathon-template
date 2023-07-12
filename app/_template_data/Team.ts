import Pfp from '../_assets/team/pfp.png'


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
        "linkedin": "https://www.linkedin.com/in/eric-sheen/",
        "twitter": "@EricS72285626",
        "facebook": "N/A",
        "website": "ericsheen.netlify.app"
    }
]