
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Airtable from 'airtable'


export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (searchParams.get('secret') !== process.env.SECRET_TOKEN) {
        return NextResponse.json("Unauthorized", { status: 401 })
    }

    // const API_KEY = process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN
    // const AIRTABLE_BASE = process.env.AIRTABLE_BASE
    // const AIRTABLE_VIEW = process.env.AIRTABLE_TABLE_NAME
    // const base = new Airtable({apiKey: API_KEY}).base(AIRTABLE_BASE || "")

    // const res = await base(AIRTABLE_VIEW || "")
    //     .select({ filterByFormula: `email="${email}"`})
    //     .firstPage()
    //     .then((records) => {
    //         if (records.length === 0) {
    //             return "None"
    //         }
    //         return records
    //     })
    //     .catch((err: any) => {
    //         console.log(err)
    //         return err;
    //     });

    const res = [{
        "fields": {
            "Name": 'Descope',
            "University": 'University of Waterloo',
            "What year are you?": 'First year',
            "Email": 'example@descope.com',
            'Why AuthHacks?': "Authentication is a fundamental part of any startup, SaaS, or business. The workshops and connections I'll make will profoundly broaden my knowledge of good security practices and industry leaders.",
            'Accepted': true 
        }
    }]
        
    return NextResponse.json(
        {
            body: res[0].fields,
        },
        {
            status: 200,
        },
    );
} 