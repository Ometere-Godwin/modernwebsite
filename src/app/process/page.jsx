import React from 'react'
import PageIntro from '../../../components/PageIntro'
import ContactSection from '../../../components/ContactSection'
import Discover from '../../../components/Discover'
import Build from '../../../components/Build'
import Deliver from '../../../components/Deliver'
import Values from '../../../components/Values'

export default function ProcessPage() {
  return (
    <>
    <PageIntro eyebrow="Our process" title="Our work">
      <p className='text-justify'>
        We believe in efficiency and maximizing our resources to provide the bestvalue to our
        clients. The primary way to do that is by re-using the same five projects we have 
        been developing for the past decade.
      </p>
    </PageIntro>

    <div className='mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32
    lg:mt-40 lg:space-y-40'>
      {/* Discover */}
      <Discover/>
      {/* Build */}
      <Build/>
      {/* Deliver */}
      <Deliver/>
    </div>
    {/* Values */}
    <Values/>
    <ContactSection/>
    </>
  )
}
