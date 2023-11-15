import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Link from "next/link";
import Logo from "./Logo";
import logos from "../public/assets/logos.png";
import Image from "next/image";

const ArrowIcon = (props) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      ></path>
    </svg>
  );
};
const Newsletterform = () => {
  return (
    <form className="max-w-sm">
      <h2
        className="font-display text-sm font-semibold tracking-wide
            text-neutral-950"
      >
        Sign up for our newsletter
      </h2>
      <p className="text-neutral-950 mt-4 text-sm">
        Subscribe to get the latest design news, articles, resources and
        insipirations
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Enter Email Address"
          autoComplete="email"
          aria-label="Email Address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 text-neutral-950
            ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none
            focus:ring-neutral-950/5"
        />

        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center hover:bg-neutral-800
            justify-center rounded-xl bg-neutral-950 text-white transition"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-12 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2">
          <FooterNavigation />
          <div className="flex lg:justify-end">
            <Newsletterform />
          </div>
        </div>
        <div
          className="w-full mb-20 mt-24 flex flex-wrap items-end justify-between
        gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12"
        >
          <Link href={"/"} aria-label="Home">
            <Logo className="h-8" fillOnHover>
              <Image src={logos} alt="logo" className="h-[50px] w-[50px]" />
            </Logo>
          </Link>
          <p className="text-sm text-neutral-700">
            Studio Agency Inc. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  );
}
