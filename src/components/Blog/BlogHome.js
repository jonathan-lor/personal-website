import React from 'react';
import './BlogHome.css';
import { FaInstagram, FaGithub, FaLinkedinIn, FaSpotify } from 'react-icons/fa';
import Navbar from '../Navbar';
import Sidebar from "../Sidebar";
import Cursor from "../Cursor";
import Footer from "../Footer";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { TextPlugin } from "gsap/TextPlugin.js";
import { FiArrowDown } from 'react-icons/fi';

import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

function BlogHome() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const headerTextRef = useRef();
    const arrowRef = useRef();


    useEffect(() => {
        const textv = headerTextRef.current;
        gsap.to(textv, { duration: 0.5, text: "blog" })
    }, [])
    // type in effect

    const linkedinRef = useRef();
    const githubRef = useRef();
    const instaRef = useRef();
    const spotifyRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline();
        const linkedin = linkedinRef.current;
        const github = githubRef.current;
        const insta = instaRef.current;
        const spotify = spotifyRef.current;
        tl.fromTo(linkedin, { xPercent: -300, opacity: 0 }, { xPercent: 0, duration: 0.5, opacity: 1, ease: "power3.easeOut" }, .4)
        tl.fromTo(github, { xPercent: -300, opacity: 0 }, { xPercent: 0, duration: 0.5, opacity: 1, ease: "power3.easeOut" }, .4625)
        tl.fromTo(insta, { xPercent: -300, opacity: 0 }, { xPercent: 0, duration: 0.5, opacity: 1, ease: "power3.easeOut" }, .525)
        tl.fromTo(spotify, { xPercent: -300, opacity: 0 }, { xPercent: 0, duration: 0.5, opacity: 1, ease: "power3.easeOut" }, .5875)

    }, []);
    //social media icon animations


    useEffect(() => {
        const arrow = arrowRef.current;
        //const arrowText = arrowTextRef.current;
        gsap.to(arrow, { yPercent: 10, ease: "power2.inOut", repeat: -1, yoyo: true })
        gsap.to(arrow, {
            opacity: 0, yPercent: -100, ease: "power2.inOut", duration: 1, scrollTrigger: {
                trigger: ".container",
                toggleActions: "play none reverse reset"
            }
        })
    }, [])
    //arrow animations



    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

            <div class="div1">
                <div class="headerAbout">
                    <span class="text" ref={headerTextRef}></span>
                    <span><Cursor /></span>
                </div>
                <div class="socialContainer">
                    <a href="https://www.linkedin.com/in/jonathanlor/" ref={linkedinRef}>
                        <FaLinkedinIn class="socialLinks1" size={36} />
                    </a>
                    <a href="https://github.com/jonathan-lor" ref={githubRef}>
                        <FaGithub class="socialLinks2" size={36} />
                    </a>
                    <a href="https://www.instagram.com/j.onathan.lor/" ref={instaRef}>
                        <FaInstagram class="socialLinks3" size={36} />
                    </a>
                    <a href="https://open.spotify.com/user/22vzwr75qkpkqw547rn6at6ya?si=4683c775a597405f" ref={spotifyRef}>
                        <FaSpotify class="socialLinks4" size={36} />
                    </a>
                </div>
            </div>

            <div class="arrowDownContainer">
                <div ref={arrowRef}><FiArrowDown size={64} /></div>
            </div>

            <div class="contentContainer">

                <div class="descriptionContainer">
                    <div class="postHeaderText">
                        2022-09-29
                    </div>
                    <div class="postLinkContainer">
                        <Link to="/CookingInCollege" relative="path" class="postLink">
                            Cooking in College, and the Soon-To-Be-Famous "Doits Sauce"
                        </Link>
                    </div>
                </div>


            </div>



            <Footer />

        </div>
    )
}

export default BlogHome;