import "./globals.css"

import Intro from './_components/Intro';
import Facts from './_components/Facts';
import About from './_components/About';
import Speakers from './_components/Speakers';
import FAQ from './_components/FAQ';
import Bottom from './_components/Bottom';
import Sponsors from './_components/Sponsors';
import Schedule from './_components/Schedule';

import { ScheduleList } from './_template_data/Schedule';
import { SpeakerList } from './_template_data/Speakers';
import { SponsorList } from './_template_data/Sponsor';
import { FAQList } from './_template_data/FAQ';

import AboutImage from "./_assets/about/umberto-deb2EnbWPr8-unsplash.jpg"
import Logo from "./_assets/logo/icons8-pixel-heart-100.png"


export default function Home() {
  return (
    <div className='page h-full'>
      <div className='w-[90%]'>
        <Intro />
        <Facts />
        <About AboutImage={AboutImage.src} />
        <Schedule data={ScheduleList} />
        <Speakers data={SpeakerList} />
        <Sponsors data={SponsorList} />
        <FAQ data={FAQList} />
      </div>
      <Bottom Logo={Logo.src}  />
    </div>
  )
}
