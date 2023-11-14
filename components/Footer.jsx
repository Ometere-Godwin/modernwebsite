import React from 'react'
import Container from './Container'
import FadeIn from './FadeIn';

const Newsletterform = () => {
    return(
        <form className='max-w-sm'>
            <h2
            className='font-display text-sm font-semibold tracking-wide
            text-neutral-950'>
            Sign up for our newsletter
        </h2>
        <p>
            Subscribe to get the latest design news, articles, resources and insipirations
        </p>
        </form>
    )
}

export default function Footer() {
  return (
    <Container
    as='footer'
    className="mt-24 w-full sm:mt-12 lg:mt-40">
        <FadeIn>
            <div></div>
        </FadeIn>
    </Container>
  )
}
