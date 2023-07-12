import { NextAuthOptions } from "next-auth"


export const authOptions: NextAuthOptions = {
  providers: [ 
    {
      id: "descope",
      name: "Descope",
      type: "oauth",
      wellKnown: "https://api.descope.com/P2RvyUSbOG2KwrxebqHucn5YIXxw/.well-known/openid-configuration",
      authorization: { params: { scope: "openid email profile" } },
      idToken: true,
      clientId: process.env.DESCOPE_PROJECT_ID, // Your Descope Project ID
      clientSecret: process.env.DESCOPE_ACCESS_KEY, // An access key created in your Descope project
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    },
  ]
}
