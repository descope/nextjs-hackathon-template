"use client";

import { useState } from 'react'
import Loading from './_components/Loading';
import Navbar from './_components/Navbar';
import Intro from './_components/Intro';
import Facts from './_components/Facts';
import About from './_components/About';
import Speakers from './_components/Speakers';
import FAQ from './_components/FAQ';
import Bottom from './_components/Bottom';
import { SpeakerList } from './_data/Speakers';
import { SponsorList } from './_data/Sponsor';
import Sponsors from './_components/Sponsors';
import Schedule from './_components/Schedule';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';


export default function Home() {
  const [triggerLoading, setTriggerLoading] = useState(true)
  const { data: session } = useSession({ 
    required: true, 
    onUnauthenticated() {
      redirect('/signin?callbackURL=/signin')
    }
  })

  return (
    <div>
      {triggerLoading ? 
        <Loading setTriggerLoading={setTriggerLoading} />
      :
        <div className='flex flex-col items-center justify-center h-full w-full'>
          <Navbar />
          <div className='w-[90%]'>
            <Intro />
            <Facts />
            <About />
            <Schedule />
            <Speakers data={SpeakerList}/>
            <Sponsors data={SponsorList}/>
            <FAQ />
          </div>
          <Bottom />
        </div>
      }
    </div>
  )
}
