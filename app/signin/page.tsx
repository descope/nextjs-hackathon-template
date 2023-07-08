'use client'

import { Silkscreen } from 'next/font/google';
import dynamic from "next/dynamic";
import { AuthProvider, useDescope, useSession, useUser } from '@descope/react-sdk'


const silkScreen = Silkscreen({
    subsets: ["latin"],
    style: "normal",
    weight: '400'
})


const DescopeWC = dynamic(
    async () => {
      const { Descope } = await import("@descope/react-sdk");
      const EnhancedDescope = (props: React.ComponentProps<typeof Descope>) => (
        <Descope {...props} />
      )
      EnhancedDescope.displayName = "EnhancedDescope"
      return EnhancedDescope;
    },
    {
      ssr: false,
    }
);


export default async function signin() {
    
    return (
        <div style={silkScreen.style} className='flex flex-col items-center justify-center h-screen w-full py-10'>
            <h1>Sign In</h1>
            <AuthProvider projectId='P2RvyUSbOG2KwrxebqHucn5YIXxw'>
                <DescopeWC flowId={'sign-in'} />
            </AuthProvider>
        </div>
    )
}
