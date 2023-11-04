"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import {motion, MotionConfig, useReducedMotion} from "framer-motion"
import Container from './Container';
import Link from "next/link";
import Logo from './Logo';
import {HiMenuAlt4} from "react-icons/hi";
import Button from './Button';
import clsx from 'clsx';

const Header = ({
    panelId, 
    invert = false,
    icon: Icon,
    expanded,
    onToggle,
    toggleRef,
}) => { 
    // Container
    return(
        <Container>
            <div className='flex items-center justify-between'>
                {/* Logo */}
                <Link href={"/"} aria-label='Home'>
                <Logo invert={invert} > Studio_clone
                </Logo>
                </Link>
                <div className='flex items-center gap-x-8'>
                    <Button href={"/contact"} invert={invert}>
                        contact Us
                    </Button>
                    <button>
                        <Icon
                        className = {clsx(
                            "h-6 w-6",
                            invert
                            ? "fill-white group-hover:fill-neutral-200"
                            : "fill-neutral-950 group-hover:fill-neutral-700"
                        )}/>
                    </button>
                </div>
            </div>
        </Container>
    );
};

const LayerInner = ({children}) => {
    const panelId = useId();
    const [expanded, setExpanded] = useState(false);
    const openRef = useRef();
    const closeRef = useRef();
    const navRef = useRef();
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        function onClick(event){
            if (event.target.close("a")?.href === window.location.href){
                setExpanded(false);
            }
        }

        window.addEventListener("click", onClick);
        return () => {
            window.removeEventListener("click", onClick);
        };
    }, []);

    return (
        <MotionConfig transition={shouldReduceMotion ? {duration :0} : undefined}>
            <header>
                <div
                className='absolute left-0 right-0 top-2 z-40 pt-14'
                aria-hidden = {expanded ? "true" : undefined}
                inert = {expanded ? "" : undefined} >

                    <Header
                    panelId={panelId}
                    icon={HiMenuAlt4}
                    toggleRef={openRef}
                    expanded={expanded}
                    onToggle={() => {
                        setExpanded((expanded) => !expanded);
                        window.setTimeout(() =>
                        closeRef.current?.focus({preventScroll: true}))
                    }
                    }/>
                </div>
            </header>
        </MotionConfig>
    )
}

export default function Layout({children}) {
    const pathName = usePathname();
  return (
     <LayerInner key={pathName}>{children}</LayerInner>
  )
}
