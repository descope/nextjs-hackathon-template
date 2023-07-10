import { FAQType } from "../template_data/FAQ"


export default function FAQ({ data }: { data: FAQType[] }) {
    return (
        <div className='flex flex-col items-center justify-center h-full w-full py-20'>
            <h1 className='text-6xl'>FAQ</h1>
            {data.map((faq, i) => (
                <div>
                    <p>{faq.question}</p>
                    <p>{faq.answer}</p>
                </div>
            ))}
        </div>
    )
}
