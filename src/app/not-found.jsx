import React from 'react'
import Container from '../../components/Container'
import FadeIn from '../../components/FadeIn'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-20 sm:pt-24 lg:pt-32">
        <FadeIn className= "flex items-center justify-center flex-col">
            <p className='font-display text-4xl font-semibold text-neutral-950
            sm:'>
                404
            </p>
            <h1 className='mt-2 font-display text-2xl font-semibold text-neutral-950'>
                Page not found
            </h1>
            <p className='mt-2 text-sm text-neutral-600'>
                Sorry, we could not find the page you are looking for.
            </p>
            <Link 
            href={"/"}
            className='mt-4 text-sm font-semibold text-neutral-950 transition
            hover:text-neutral-700 border-2 border-neutral-300 px-2 rounded uppercase'> Go to homepage
            </Link>
        </FadeIn>
    </Container>
  )
}
