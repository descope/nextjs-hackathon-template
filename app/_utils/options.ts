import { NextAuthOptions } from "next-auth"


export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "descope",
      name: "Descope",
      type: "oauth",
      wellKnown: `https://api.descope.com/${process.env.DESCOPE_PROJECT_ID}/.well-known/openid-configuration`,
      authorization: { params: { scope: "openid email profile descope.claims" } },
      idToken: true,
      clientId: process.env.DESCOPE_PROJECT_ID,
      clientSecret: process.env.DESCOPE_ACCESS_KEY,
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
					tenants: profile.tenants
        }
      },
    },
  ],
	callbacks: {
		async jwt({ token, user }) {
			token.tenants = token.tenants ?? user?.tenants;
			return token;
		},
		async session({ session, token }) {
			session.tenants = token?.tenants as any[] ?? [];
			return session;
		}
	}
}
