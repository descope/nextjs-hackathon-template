import Descope from "@auth/core/providers/descope"
import { Auth } from "@auth/core";


const request = new Request("http://localhost:3000/")
const response = await Auth(request, {
  providers: [
    Descope({
        clientId: "P2RvyUSbOG2KwrxebqHucn5YIXxw",
        clientSecret: "K2SFouDlLxC0xQhlBAkqgVMii0V3Qgptwnp6unXL26dHCorCl3ao91m1MTz8bwVzFqqTKff",
    })
  ],
})


export { response as GET, response as POST }
