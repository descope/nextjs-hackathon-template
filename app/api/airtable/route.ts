
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Airtable from 'airtable';


export async function GET(request: NextRequest) {    
    const API_KEY = process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN
    const AIRTABLE_BASE = process.env.AIRTABLE_BASE
    const AIRTABLE_VIEW = process.env.AIRTABLE_VIEW_NAME

    const base = new Airtable({apiKey: API_KEY}).base(AIRTABLE_BASE || "");
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    const res = await base(AIRTABLE_VIEW || "")
        .select({ filterByFormula: `email="${email}"`})
        .firstPage()
        .then((records) => {
            if (records.length === 0) {
                return "None"
            }
            return records
        })
        .catch((err: any) => {
            console.log(err)
            return err;
        });
        
    return NextResponse.json(
        {
            body: res[0].fields,
        },
        {
            status: 200,
        },
    );
} 