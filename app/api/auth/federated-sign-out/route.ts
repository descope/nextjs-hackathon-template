import { authOptions } from "@/app/_utils/options";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const handler = async (req: NextRequest, res: NextResponse) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.redirect(process.env.NEXT_PUBLIC_NEXTAUTH_URL!);
    }

    const endSessionURL = `https://api.descope.com/oauth2/v1/logout`;
    const redirectURL = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/auth/logout`;
    const endSessionParams = new URLSearchParams({
      // @ts-ignore
      id_token_hint: session.idToken,
      post_logout_redirect_uri: redirectURL,
    });
    const fullUrl = `${endSessionURL}?${endSessionParams.toString()}`;
    return NextResponse.redirect(fullUrl);
  } catch (error) {
    console.error(error);
  }
};
export const GET = handler;
