
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Airtable from 'airtable';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/_utils/options';


export async function GET(request: Request, response: Response) {    
    const API_KEY = process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN
    const AIRTABLE_BASE = process.env.AIRTABLE_BASE
    const AIRTABLE_VIEW = process.env.AIRTABLE_VIEW_NAME

    const base = new Airtable({apiKey: API_KEY}).base(AIRTABLE_BASE || "");

    const session = await getServerSession(authOptions)
    const email = session?.user?.email

    const data = await base(AIRTABLE_VIEW || "")
        .select({ filterByFormula: `email="${email}"`})
        .firstPage()
        .then((records) => {
            if (records.length === 0) {
                return null
            }
            return records
        })
        .catch((err: any) => {
            console.log(err)
            return err;
        });

    return NextResponse.json(
        {
            body: data[0]
        },
        {
            status: 200,
        },
    );
} 