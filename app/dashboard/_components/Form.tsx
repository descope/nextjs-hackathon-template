export default function Form() {
    return (
        <div className="col">
            <p className="text-lg mb-4"><span className="text-pink-500">NOTE!</span> Use the same email that you have logged in with</p>
            <iframe className="w-full h-screen" src={process.env.AIRTABLE_FORM_EMBED}></iframe>
        </div>
    )
}
