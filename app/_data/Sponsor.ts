import AMD from '../_assets/sponsors/amd.webp'
import Google from '../_assets/sponsors/google.webp'
import Wealthsimple from '../_assets/sponsors/wealthsimple.webp'


export interface SponsorType {
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