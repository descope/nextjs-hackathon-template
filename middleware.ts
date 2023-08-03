
// import { withAuth } from "next-auth/middleware"
// import { NextRequest, NextResponse } from "next/server"
// import { getToken } from "next-auth/jwt"
// import { getServerSession } from "next-auth"
// import { authOptions } from "./app/_utils/options"
// import { headers } from "next/headers"


// export default withAuth(
//     async function middleware (req: NextRequest) {
//         const session = await getServerSession(authOptions)

//         if (!session) {
//             const response = new NextResponse("Unauthorized", {
//                 status: 401,
//                 statusText: "UnAuthorized",
//             });
//             return response
//         }

//         return NextResponse.next({
//             headers: headers()
//         })
//     }
// )


// export const config = { matcher: ["/dashboard/:path*", "/api/:functions*"] }


import { withAuth } from "next-auth/middleware"


export default withAuth({
    callbacks: { // middleware is function. Callback
      authorized({ req, token }) {
        return !!token
      },
    },
})
  

export const config = { matcher: ["/dashboard"] }