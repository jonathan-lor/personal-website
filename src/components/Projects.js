import React from 'react';
import './Projects.css';
import { FaInstagram, FaGithub, FaLinkedinIn, FaSpotify } from 'react-icons/fa';
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import Cursor from "./Cursor";
import Footer from "./Footer";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { TextPlugin } from "gsap/TextPlugin.js";
import { FiArrowDown } from 'react-icons/fi';
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


    useEffect(() => {

        let revealBars = document.querySelectorAll(".box");
        revealBars.forEach((bar) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: bar,
                    scrub: 1,
                    start: "top 80%",
                    end: "top 70%",
                    //markers: true
                }
            });
            tl.fromTo(bar, { height: 0 }, {
                duration: 1.5,
                height: "auto",
                ease: "Power2.out"
            });
        });
        //reveal the left border bar

        let revealContainers = document.querySelectorAll(".reveal");

        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    //scrub: 1,
                    //start: "top 60%",
                    //end: "top 50%",
                    //markers: true,
                    toggleActions: "restart none none reset"
                }
            });
            tl.set(container, { autoAlpha: 1 });
            tl.fromTo(container, { xPercent: -100 }, {
                duration: 1.5,
                xPercent: 0,
                ease: "Power2.out"
            });
            tl.from(image, {
                duration: 1.5,
                xPercent: 100,
                scale: 1.3,
                delay: -1.5,
                ease: "Power2.out"
            });
        });
        //reveal the image

    }, [])
    //pic and background reveal


    const h1Ref = useRef();
    const h1CursorRef = useRef();
    const b11Ref = useRef();
    const b11CursorRef = useRef();
    const b12Ref = useRef();
    const b12CursorRef = useRef();
    const b13Ref = useRef();
    const b13CursorRef = useRef();
    const b14Ref = useRef();
    const b14CursorRef = useRef();

    useEffect(() => {

        const h1 = h1Ref.current;
        const h1Cursor = h1CursorRef.current;
        const b11 = b11Ref.current;
        const b11Cursor = b11CursorRef.current;
        const b12 = b12Ref.current;
        const b12Cursor = b12CursorRef.current;
        const b13 = b13Ref.current;
        const b13Cursor = b13CursorRef.current;
        const b14 = b14Ref.current;
        const b14Cursor = b14CursorRef.current;


        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: h1,
                //scrub: 1,
                //start: "top 80%",
                //end: "top 40%",
                //markers: true
                toggleActions: "restart none none reset",
                ease: "none"
            }
        });

        tl.to(h1Cursor, { autoAlpha: 1 });
        tl.to(h1, { duration: .5, text: "doitcoding.com" })
        tl.to(h1Cursor, { duration: 1, opacity: 0 })
        tl.to(b11Cursor, { autoAlpha: 1 });
        tl.to(b11, { duration: 1, text: "doitcoding.com was fully designed and built by myself!" })
        tl.to(b11Cursor, { duration: 1, opacity: 0 })
        tl.to(b12Cursor, { autoAlpha: 1 });
        tl.to(b12, { duration: 1, text: "it handles sign ups for our coding camps and 1-on-1 tutoring." })
        tl.to(b12Cursor, { duration: 1, opacity: 0 })
        tl.to(b13Cursor, { autoAlpha: 1 });
        tl.to(b13, { duration: 1, text: "besides being the backbone for the company, doitcoding.com was my first time using tailwind css." })
        tl.to(b13Cursor, { duration: 1, opacity: 0 })
        tl.to(b14Cursor, { autoAlpha: 1 });
        tl.to(b14, { duration: 1, text: "being able to use css utility classes embedded in html allowed the website's code to reflect its minimalistic design!" })
        //tl.to(b14Cursor, { duration: 1.5, opacity: 0 })

    }, [])
    //text reveal for body and header of each image for doitcoding.com


    const h2Ref = useRef();
    const h2CursorRef = useRef();
    const b21Ref = useRef();
    const b21CursorRef = useRef();
    const b22Ref = useRef();
    const b22CursorRef = useRef();
    const b23Ref = useRef();
    const b23CursorRef = useRef();
    const b24Ref = useRef();
    const b24CursorRef = useRef();

    useEffect(() => {

        const h2 = h2Ref.current;
        const h2Cursor = h2CursorRef.current;
        const b21 = b21Ref.current;
        const b21Cursor = b21CursorRef.current;
        const b22 = b22Ref.current;
        const b22Cursor = b22CursorRef.current;
        const b23 = b23Ref.current;
        const b23Cursor = b23CursorRef.current;
        const b24 = b24Ref.current;
        const b24Cursor = b24CursorRef.current;


        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: h2,
                //scrub: 1,
                //start: "top 80%",
                //end: "top 40%",
                //markers: true
                toggleActions: "restart none none reset",
                ease: "none"
            }
        });

        tl.to(h2Cursor, { autoAlpha: 1 });
        tl.to(h2, { duration: 1, text: "osu! stats discord bot" })
        tl.to(h2Cursor, { duration: 1, opacity: 0 })
        tl.to(b21Cursor, { autoAlpha: 1 });
        tl.to(b21, { duration: 1, text: "osu! is a pretty fun rhythm game with many metrics to track player skill." })
        tl.to(b21Cursor, { duration: 1, opacity: 0 })
        tl.to(b22Cursor, { autoAlpha: 1 });
        tl.to(b22, { duration: 1, text: "the most important metric however, performance points (PP), can only be viewed on the osu! website outside of the game client." })
        tl.to(b22Cursor, { duration: 1, opacity: 0 })
        tl.to(b23Cursor, { autoAlpha: 1 });
        tl.to(b23, { duration: 1, text: "the obvious solution was to spend hours turning a 30 second task into a 5 second one :)" })
        tl.to(b23Cursor, { duration: 1, opacity: 0 })
        tl.to(b24Cursor, { autoAlpha: 1 });
        tl.to(b24, { duration: 1, text: "using discord.py and osu!api v2, i made a bot that concisely displays player profile and score info upon request in a discord text channel!" })

    }, [])

    //text reveal for body and header of each image for osu stats bot

    const h3Ref = useRef();
    const h3CursorRef = useRef();


    useEffect(() => {

        const h3 = h3Ref.current;
        const h3Cursor = h3CursorRef.current;



        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: h3,
                toggleActions: "restart none none reset",
                ease: "none"
            }
        });

        tl.to(h3Cursor, { autoAlpha: 1 });
        tl.to(h3, { duration: 1, text: "more projects on the way!" })

    }, [])

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
                <div class="subContainer">
                    <div class="box"></div>
                    <div class="reveal">
                        <img src={DoitHome} />
                    </div>
                </div>
                <div class="descriptionContainer">
                    <div class="headerDescCursorContainer">
                        <a class="descHeaderText" ref={h1Ref} href="https://doitcoding.com/"></a>
                        <span class="cursorH" ref={h1CursorRef}><Cursor /></span>
                    </div>
                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" ref={b11Ref}></span>
                        <span class="cursorH" ref={b11CursorRef}><Cursor /></span>
                    </div>


                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" ref={b12Ref}></span>
                        <span class="cursorH" ref={b12CursorRef}><Cursor /></span>
                    </div>

                    <div class="subContainer">
                        <div class="box"></div>
                        <div class="reveal">
                            <img src={DoitAbout} />
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" ref={b13Ref}></span>
                        <span class="cursorH" ref={b13CursorRef}><Cursor /></span>
                    </div>

                    <div class="subContainer">
                        <div class="box"></div>
                        <div class="reveal">
                            <img src={DoitCamps} />
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" ref={b14Ref}></span>
                        <span class="cursorH" ref={b14CursorRef}><Cursor /></span>
                    </div>
                </div>
            </div>

            <div class="contentContainer">
                <div class="subContainer">
                    <div class="box"></div>
                    <div class="reveal">
                        <img src={OsuBotProfile} />
                    </div>
                </div>
                <div class="descriptionContainer">
                    <div class="headerDescCursorContainer">
                        <a class="descHeaderText" ref={h2Ref} href="https://github.com/jonathan-lor/osugame-stats"></a>
                        <span class="cursorH" ref={h2CursorRef}><Cursor /></span>
                    </div>
                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" ref={b21Ref}></span>
                        <span class="cursorH" ref={b21CursorRef}><Cursor /></span>
                    </div>


                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" ref={b22Ref}></span>
                        <span class="cursorH" ref={b22CursorRef}><Cursor /></span>
                    </div>

                    <div class="subContainer">
                        <div class="box"></div>
                        <div class="reveal">
                            <img src={OsuBotTop} />
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" ref={b23Ref}></span>
                        <span class="cursorH" ref={b23CursorRef}><Cursor /></span>
                    </div>

                    <div class="subContainer">
                        <div class="box"></div>
                        <div class="reveal">
                            <img src={OsuBotRecent} />
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" ref={b24Ref}></span>
                        <span class="cursorH" ref={b24CursorRef}><Cursor /></span>
                    </div>
                </div>
            </div>

            <div class="contentContainer">
                <div class="descriptionContainer">
                    <div class="headerDescCursorContainer">
                        <a class="descHeaderText" ref={h3Ref} ></a>
                        <span class="cursorH" ref={h3CursorRef}><Cursor /></span>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default About;