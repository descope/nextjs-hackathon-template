export default function Info({ data }: { data: string[] }) {
    return (
        <div className="row w-full items-stretch">
            <div className="flex-1 bg-[#efefef] p-8 mr-2 shadow-xl max-md:mb-2 max-md:mr-0">
                <h1 className="text-4xl mb-6 text-purple-600">Announcements</h1>
                {data.map((announcement, i) => (
                    <div key={i} className="mb-3">
                        <p className="bg-gray-200 p-4">{announcement}</p>
                    </div>
                ))}
            </div>
            <div className="flex-1 bg-[#efefef] p-8 shadow-xl ml-2 max-md:mt-2 max-md:ml-0">
                <h1 className="text-4xl mb-6 text-pink-500">Location</h1>
                <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36553983.440870814!2d-96!3d56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sca!4v1689359552788!5m2!1sen!2sca"></iframe>
            </div>
        </div>
    )
}
