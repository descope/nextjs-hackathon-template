import { Silkscreen } from 'next/font/google';


const silkScreen = Silkscreen({
    subsets: ["latin"],
    style: "normal",
    weight: '400'
})


export default function Schedule() {

    return (
        <div style={silkScreen.style}>
            <p className='text-6xl'>Schedule</p>
        </div>
    )
}
