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
        "name": "Descope",
        "role": "Creator",
        "linkedin": "https://www.linkedin.com/company/descope/",
        "twitter": "@descopeinc",
        "facebook": "N/A",
        "website": "https://descope.com/"
    }
]