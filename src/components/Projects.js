import React from 'react';
import './Projects.css';
import { FaInstagram, FaGithub, FaLinkedinIn, FaSpotify } from 'react-icons/fa';
import Cursor from "./Cursor";
import Footer from "./Footer";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { TextPlugin } from "gsap/TextPlugin.js";
import { FiArrowDown } from 'react-icons/fi';
import O1 from './images/O(1).webp'
import ONSquared from './images/O(n^2).webp'
import DoitHome from './images/doitcoding_site_home.webp'
import DoitAbout from './images/doitcoding_site_about.webp'
import DoitCamps from './images/doitcoding_site_camps.webp'
import OsuBotProfile from './images/osubot_profile.webp'
import OsuBotTop from './images/osubot_top.webp'
import OsuBotRecent from './images/osubot_recent.webp'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

function About() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const headerTextRef = useRef();
    const arrowRef = useRef();


    useEffect(() => {
        const textv = headerTextRef.current;
        gsap.to(textv, { duration: 1, text: "projects" })
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
                    <div class="headerDescCursorContainer">
                        <a class="descHeaderText" href="https://github.com/jonathan-lor/runtimed">Runtimed</a>
                        <span class="cursorH" ><Cursor /></span>
                    </div>
                </div>

    <div class="subContainer">
        <div>
            <img src={O1} class="contentImg"/>
        </div>
    </div>
    <div class="descriptionContainer">
        <div class="headerBodyCursorContainer">
            <span class="descBodyText" >Runtimed began as a hackathon project, and is a web app (in progress) that approximates the time complexity of a C++ function via a regression model!</span>
            <span class="cursorH" ><Cursor /></span>
        </div>


        <div class="headerBodyCursorContainer">
            <span class="descBodyText" >Functions can be manually typed into the built-in text editor or pasted in to be analyzed.</span>
            <span class="cursorH" ><Cursor /></span>
        </div>

        <div class="subContainer">
            <div>
                <img src={ONSquared} class="contentImg"/>
            </div>
        </div>

        <div class="headerBodyCursorContainer">
            <span class="descBodyText" >The current analysis is done by plugging a series of values into the function and observing how the corresponding output time increases in comparison to common time complexities.</span>
            <span class="cursorH" ><Cursor /></span>
        </div>

        <div class="headerBodyCursorContainer">
            <span class="descBodyText" >Check out my GitHub for a more detailed explanation on how it all works!</span>
            <span class="cursorH" ><Cursor /></span>
        </div>


    </div>
</div>





            <div class="contentContainer">

            <div class="descriptionContainer">
            <div class="headerDescCursorContainer">
                        <a class="descHeaderText" href="https://doitcoding.com/">doitcoding.com</a>
                        <span class="cursorH" ><Cursor /></span>
                    </div>
            </div>

                <div class="subContainer">
                    <div>
                        <img src={DoitHome} class="contentImg"/>
                    </div>
                </div>
                <div class="descriptionContainer">
                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >doitcoding.com was fully designed and built by myself!</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>


                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >It handles sign ups for our coding camps and 1-on-1 tutoring.</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>

                    <div class="subContainer">
                        <div>
                            <img src={DoitAbout} class="contentImg"/>
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >Besides being the backbone for the company, doitcoding.com was my first time using Tailwind CSS.</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>

                    <div class="subContainer">

                        <div>
                            <img src={DoitCamps} class="contentImg"/>
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >Being able to use CSS utility classes embedded in the HTML allowed the website's code to reflect its minimalistic design!</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>
                </div>
            </div>

            <div class="contentContainer">

            <div class="descriptionContainer">
            <div class="headerDescCursorContainer">
                        <a class="descHeaderText" href="https://github.com/jonathan-lor/osugame-stats">osu! Stats</a>
                        <span class="cursorH" ><Cursor /></span>
                    </div>
            </div>

                <div class="subContainer">

                    <div >
                        <img src={OsuBotProfile} class="contentImg"/>
                    </div>
                </div>
                <div class="descriptionContainer">
                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >osu! is a pretty fun rhythm game with many metrics to track player skill.</span>
                        <span class="cursorH"><Cursor /></span>
                    </div>


                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >The most important metric however, performance points (PP), can only be viewed on the osu! website outside of the game client.</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>

                    <div class="subContainer">
                        <div >
                            <img src={OsuBotTop} class="contentImg"/>
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >The obvious solution was to spend hours turning a 30 second task into a 5 second one!</span>
                        <span class="cursorH"><Cursor /></span>
                    </div>

                    <div class="subContainer">

                        <div >
                            <img src={OsuBotRecent} class="contentImg"/>
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >Using Discord.py and osu!API v2, I made a bot that concisely displays player profile and score info upon request in a discord text channel!</span>
                        <span class="cursorH"><Cursor /></span>
                    </div>
                </div>
            </div>

            <div class="contentContainer">
                <div class="descriptionContainer">
                    <div class="headerDescCursorContainer">
                        <a class="descHeaderText"  >Check out my GitHub for a few other &#40;possibly unfinished&#41; projects :&#41;</a>
                        <span class="cursorH" ><Cursor /></span>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default About;