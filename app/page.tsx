"use client";

import { useState, useEffect } from 'react'
import Loading from './_components/loading';
import Navbar from './_components/navbar';
import Intro from './_components/intro';


export default function Home() {
  const [triggerLoading, setTriggerLoading] = useState(true)

  return (
    <div>
      {triggerLoading ? 
        <Loading setTriggerLoading={setTriggerLoading} />
      :
        <div className='flex flex-col items-center justify-center h-full w-full'>
          <Navbar />
          <Intro />
        </div>
      }
    </div>
  )
}
