import AMD from '../assets/sponsors/amd.webp'
import Google from '../assets/sponsors/google.webp'
import Wealthsimple from '../assets/sponsors/wealthsimple.webp'


export type SponsorType = {
    "img": string
}


export const SponsorList: SponsorType[] = [
    {
        "img": AMD.src
    },
    {
        "img": Google.src
    },
    {
        "img": Wealthsimple.src
    }
]