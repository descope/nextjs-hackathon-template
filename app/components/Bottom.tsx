import Logo from "../assets/icons8-pixel-heart-100.png"


export default function Bottom() {

    return (
        <div className='flex flex-row items-center justify-between px-4 py-4 bottom-0 w-full bg-gray-950'>
            <div>
                <img className="w-12 h-12 mx-6" src={Logo.src} alt="navbar-logo" />
            </div>
            <div className='flex flex-row items-center justify-center h-full py-6'>
                <a className="mx-6" href="#">Instagram</a>
                <a className="mx-6" href="#">LinkedIn</a>
                <a className="mx-6" href="#">Twitter</a>
                <a className="mx-6" href="#">Facebook</a>
            </div>
        </div>
    )
}
