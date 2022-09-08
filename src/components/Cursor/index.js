import React from 'react';
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import './cursor.css';

function Cursor() {
    const cursorRef = useRef();
    useEffect(() => {
        gsap.to(cursorRef.current, { opacity: 0, ease: "power2.inOut", repeat: -1 })
    }, [])

    return (

        <span class="cursor" ref={cursorRef}>_</span>

    )
}

export default Cursor;