"use client";

import { useState } from 'react'
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Facts from './components/Facts';
import About from './components/About';
import Speakers from './components/Speakers';
import FAQ from './components/FAQ';
import Bottom from './components/Bottom';
import Sponsors from './components/Sponsors';
import Schedule from './components/Schedule';

import { ScheduleList } from './template_data/Schedule';
import { SpeakerList } from './template_data/Speakers';
import { SponsorList } from './template_data/Sponsor';
import { FAQList } from './template_data/FAQ';


export default function Home() {
  const [triggerLoading, setTriggerLoading] = useState(true)

  return (
    <div>
      {triggerLoading ? 
        <Loading setTriggerLoading={setTriggerLoading} />
      :
        <div className='flex flex-col items-center justify-center h-full w-full'>
          <div className='w-[90%]'>
            <Intro />
            <Facts />
            <About />
            <Schedule data={ScheduleList} />
            <Speakers data={SpeakerList} />
            <Sponsors data={SponsorList} />
            <FAQ data={FAQList} />
          </div>
          <Bottom />
        </div>
      }
    </div>
  )
}
