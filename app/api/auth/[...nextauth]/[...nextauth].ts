// import Descope from "@auth/core/providers/descope"
// import { Auth } from "@auth/core";


// const request = new Request("http://localhost:3000/api/auth/callback/descope")
// const response = await Auth(request, {
//   providers: [
//     Descope({
//         clientId: "P2RvyUSbOG2KwrxebqHucn5YIXxw",
//         clientSecret: "K2SFouDlLxC0xQhlBAkqgVMii0V3Qgptwnp6unXL26dHCorCl3ao91m1MTz8bwVzFqqTKff",
//     })
//   ],
// })


// export { response as GET, response as POST }


import { AuthConfig } from "@auth/core";
import NextAuth from "next-auth";
import DescopeProvider from "next-auth/providers/descope";


export const authOptions: AuthConfig = {
  providers: [
    DescopeProvider({
      clientId: "P2RvyUSbOG2KwrxebqHucn5YIXxw",
      clientSecret: "K2SFouDlLxC0xQhlBAkqgVMii0V3Qgptwnp6unXL26dHCorCl3ao91m1MTz8bwVzFqqTKff",
    }),
  ],
  // pages: {
  //   signIn: "/signin"
  // }
} 


const handler =  NextAuth(authOptions);
export { handler as GET, handler as POST }