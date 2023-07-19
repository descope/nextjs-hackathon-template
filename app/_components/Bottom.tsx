import Image from "next/image"
import { SocialType } from "../_template_data/Social"


export default function Bottom({ Logo, SocialList }: { Logo: string, SocialList: SocialType[] }) {
    return (
        <div className='row justify-between px-4 py-4 bottom-0 w-full bg-[#1d242b]'>
            <div>
                <Image
                    src={Logo}
                    alt="bottom navbar logo"
                    width={200}
                    height={160}
                    className="w-12 h-12 m-6"
                    placeholder="blur"
                    blurDataURL={Logo}
                />
            </div>
            <div className='row items-start h-full py-6 max-md:col text-white'>
                {SocialList.map((social, i) => (
                    <a key={i} className="m-6" href={social.link}>{social.social}</a>
                ))}
            </div>
        </div>
    )
}
