"use client";
import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
const FadeInStaggerContext = createContext(false);
const viewPoint = {once: true, margin: "0px 8px -200px"};

export default function FadeIn(props) {
    const shouldReduceMotion = useReducedMotion();
    const isInStaggerGroup = useContext(FadeInStaggerContext);
  return (
    <motion.div variants={{hidden: {opacity:0, y:shouldReduceMotion ? 0:24}, 
    visible: {opacity: 1, y: 0}}}
    
    transition={{duration: 0.5}}
    {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewPoint,
        })}
        {...props}/>
  );
};

export const FadeInStagger = ({faster = false, ...props}) => {
    return (
        <FadeInStaggerContext.Provider>
            <motion.div
            initial = "hidden"
            whileInView="visible"
            viewPoint={viewPoint}
            transition={{staggerChildren: faster ? 0.12 : 0.2}}/>
        </FadeInStaggerContext.Provider>
    )
}
