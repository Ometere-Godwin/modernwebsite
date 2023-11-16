import Image from 'next/image'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import FadeIn from '../../components/FadeIn'

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
    </main>
  )
}
