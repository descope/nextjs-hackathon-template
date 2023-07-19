import { FAQType } from "../_template_data/FAQ"


export default function FAQ({ data }: { data: FAQType[] }) {
    return (
        <div id="faq" className='page component'>
            <h1 className='title'>FAQ</h1>
            <div className="row items-stretch w-full">
                {data.map((faq, i) => (
                    <div key={i} className="flex-1 col my-6 mx-2 bg-[#26323f]">
                        <p className="px-6 py-4 bg-[#ced3e0]">{faq.question}</p>
                        <p className="px-6 py-4 pb-5 text-[#fff]">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
