"use client";
import { useEffect, useId, useRef, useState } from "react";
import {motion} from "framer-motion";

function Block({x, y, ...props}){
    return(
        <motion.path
        transform={`translate(${-32 * y + 96 * x} ${160 * y})`}
        d="M45.119 4.5all.5 11.5 0 0 0 0-11.277 9.2451-25.6 128C6.82 148.861 12.2"
        {...props}
        />
    );
};
export default function GridPattern({yOffset =0, interactive = false, ...props}) {
    let id = useId();
    let  ref= useRef();
    let currentBlock = useRef();
    let counter = useRef(0)
    let [hoveredBlocks, setHoveredBlocks] = useState([]);
    let staticBlocks = [
        [1,2],
        [2,2],
        [4,3],
        [6,2],
        [7,4],
        [5,5]
    ]
  return (
    <div>GridPattern</div>
  )
}
