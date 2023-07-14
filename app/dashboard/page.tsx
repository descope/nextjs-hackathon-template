import Header from "./_components/Header";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/_utils/options';
import Status from "./_components/Status";
import Form from "./_components/Form";
import Application from "./_components/Application";
import Info from "./_components/Info";


const getData = async () => {
    const session = await getServerSession(authOptions)
    const email = session?.user?.email

    const res = await fetch(`http://localhost:3000/api/airtable?email=${email}`)
    const data = await res.json()
    return data.body
}


export default async function Dashboard() {
    const airtableRecord = await getData()

    return (
        <div className='page space'>
            <div className="w-[90%]">
                <Header />
                {airtableRecord ?
                    <>
                        <Status accepted={airtableRecord['Accepted']} />
                        <Info />
                        <Application application={airtableRecord} />
                    </>
                    :
                    <Form />
                }
            </div>
        </div>
    )
}
