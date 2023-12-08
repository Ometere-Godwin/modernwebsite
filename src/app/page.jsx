import Image from 'next/image'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import FadeIn from '../../components/FadeIn'
import Clients from '../../components/Clients'
import Testimonials from '../../components/Testimonials';
import logoPhobiaDark from "../../public/assets/logoPhobiaDark.svg";
import Services from '../../components/Services'
import ContactSection from '../../components/ContactSection'

export default function Home() {
  return (
    <main className='text-neutral-950'>
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1
          className='font-display text-5xl font-medium tracking-tighttext-neutral-950 [text-wrap:balance] sm:text-7xl'>
            Make your online presence a reality with us</h1>
          <p
          className='mt-6 text-xl text-neutral-600'>
            We are a group of developers working at the intersection of design
            and technology. It is a really a busy intercestion though - a lot of 
            our staff have been involved in the hit and run
          </p>
        </FadeIn>
      </Container>
      <Clients/>
      <Testimonials className="mt-24 sm:mt-32 lg:mt-40"
      client={{name: "Phobia", logo: logoPhobiaDark}}>
        The team at the studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of those
        annoying permission dialogs
      </Testimonials>
      <Services/>
      <ContactSection/>
    </main>
  )
}
