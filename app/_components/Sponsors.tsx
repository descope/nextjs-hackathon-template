import "../globals.css"
import { SponsorType } from '../_template_data/Sponsor';


export default function Sponsors({ data }: { data: SponsorType[] }) {
    return (
        <div className='page component'>
            <p className='title'>Sponsors</p>
            <div className='row w-full'>
                {data.map((obj, i) => (
                    <div key={i} className='row justify-start m-10'>
                        <img className='w-[25vh] object-cover' src={obj.img} alt="" />
                    </div>
                ))}         
            </div>
        </div>
    )
}
