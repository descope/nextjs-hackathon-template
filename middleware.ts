
import { withAuth } from "next-auth/middleware"
import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"


export default withAuth(
    async function middleware (req: NextRequest) {
        const token = await getToken({ req })
        const isAuthenticated = !!token;

        if (!isAuthenticated) {
            const response = new NextResponse("Unauthorized", {
                status: 401,
                statusText: "UnAuthorized",
            });
            return response
        }

        return NextResponse.next()
    }
)


export const config = { matcher: ["/dashboard/:path*", "/api/:functions*"] }