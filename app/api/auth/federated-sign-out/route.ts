import { authOptions } from "@/app/_utils/options";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.redirect(process.env.NEXTAUTH_URL!);
    }

    const res = fetch("https://api.descope.com/oauth2/v1/logout", {
      method: "POST",
      body: new URLSearchParams({
        // @ts-ignore
        id_token_hint: session.idToken,
        // Needed for OAuth logout endpoint
        post_logout_redirect_uri: process.env.NEXTAUTH_URL!,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Could not sign out of Descope",
    });
  }
}
