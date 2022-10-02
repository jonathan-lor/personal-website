import { FaInstagram, FaGithub, FaLinkedinIn, FaSpotify } from 'react-icons/fa';
import { FiArrowDown } from 'react-icons/fi';
import './Home.css';
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { TextPlugin } from "gsap/TextPlugin.js";
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import Cursor from "./Cursor";
import Footer from "./Footer";

import DoitKids from './images/doitkid.webp'
import DoitTeach from './images/doitteaches.webp'
import DoitNews from './images/doitnewspaper.webp'
import RollCall from './images/rollcall.webp'
import BSimStaff from './images/bsim_staff.webp'
import BSimFreshmen from './images/bsim_freshmen.webp'

import AccPic from './images/accpic.webp'
import AccPms from './images/acc_pms.webp'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)


function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    //navbar and side menu vars ^^

    const nameRef = useRef();
    const socialsRef = useRef();
    // ref for name text

    const linkedinRef = useRef();
    const githubRef = useRef();
    const instaRef = useRef();
    const spotifyRef = useRef();

    const arrowRef = useRef();
    const arrowTextRef = useRef();

    const cursorRef = useRef();
    const textRef = useRef();

    const words = [
        "hi, i'm jonathan lor!",
        "i'm a cs student @ texas a&m,",
        "an aspiring web developer,",
        "a front-end geek,",
        "an entrepeneur,",
        "an austinite,",
        "a 'gym bro',",
        "a huuuge worship music fan,",
        "a self-proclaimed pro chef,",
        "and lots more!",
        "welcome to my website! :)"
    ];

    useEffect(() => {
        gsap.to(cursorRef.current, { opacity: 0, ease: "power2.inOut", repeat: -1 })
    }, [])
    //cursor blink animation

    useEffect(() => {
        const textv = textRef.current;
        const textTL = gsap.timeline({

            repeat: -1,
        });

        words.forEach(word => {
            const tl = gsap.timeline({
                repeat: 1,
                yoyo: true,
                repeatDelay: 1
            })
            tl.to(textv, { duration: 1.5, text: word })
            textTL.add(tl)
        })

    }, [])
    // type in effect


    useEffect(() => {
        gsap.to(cursorRef.current, { opacity: 0, ease: "power2.inOut", repeat: -1 })
    }, [])


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
        const arrowText = arrowTextRef.current;
        gsap.to(arrow, { yPercent: 10, ease: "power2.inOut", repeat: -1, yoyo: true })
        gsap.to(arrow, {
            opacity: 0, yPercent: -50, ease: "power2.inOut", duration: 1, scrollTrigger: {
                trigger: ".container",
                toggleActions: "play none reverse reset"
            }
        })
        gsap.to(arrowText, {
            opacity: 0, yPercent: -200, ease: "power2.inOut", duration: 1, scrollTrigger: {
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
                <div class="header" ref={nameRef}>
                    <span class="text" ref={textRef}></span>
                    <span><Cursor /></span>
                </div>
                <div class="socialContainer" ref={socialsRef}>
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
                        <a class="descHeaderText" href="https://doitcoding.com/">do-it coding</a>
                        <span class="cursorH" ><Cursor /></span>
                    </div>
            </div>

                <div class="subContainer">
                    <div>
                        <img src={DoitKids} />
                    </div>
                </div>
                <div class="descriptionContainer">
                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >i founded do-it coding with one of my best friends in may of 2022!</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>


                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >born out of a desire to teach my little brother how to code, do-it coding started as a coding bootcamp operating out of a local ice cream shop.</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>

                    <div class="subContainer">
                        <div>
                            <img src={DoitTeach} />
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >in our first coding bootcamp, we taught scratch to 6 elementary-aged kids in preparation for a lego robotics season in the fall.</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>

                    <div class="subContainer">
                        <div>
                            <img src={DoitNews} />
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >by the end of summer 2022 however, we had camps running every week, with 1-on-1 tutoring being offered as well!</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>
                </div>
            </div>


            <div class="contentContainer">

            <div class="descriptionContainer">
                <div class="headerDescCursorContainer">
                        <a class="descHeaderText" href="https://impactretreat.com/">impact retreat</a>
                        <span class="cursorH" ><Cursor /></span>
                    </div>
            </div>


                <div class="subContainer">
                    <div>
                        <img src={RollCall} />
                    </div>
                </div>
                <div class="descriptionContainer">
                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >from 2020-2022, i served as a counselor and co-chair with impact.</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>


                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >impact is a ministry dedicated to connecting incoming texas a&m students to churches and strong christian community in bryan/college station.</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>

                    <div class="subContainer">
                        <div>
                            <img src={BSimStaff} />
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >as a counselor, i worked alongside my peers to guide and support the incoming students at and beyond retreat.</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>

                    <div class="subContainer">
                        <div>
                            <img src={BSimFreshmen} />
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >as a co-chair, i trained and equipped counselors for retreat during the preceding spring semester!</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>
                </div>
            </div>

            <div class="contentContainer">

            <div class="descriptionContainer">
                <div class="headerDescCursorContainer">
                        <a class="descHeaderText" href="http://www.aggiecodingclub.com/">aggie coding club</a>
                        <span class="cursorH" ><Cursor /></span>
                    </div>
            </div>

                <div class="subContainer">
                    <div>
                        <img src={AccPms} />
                    </div>
                </div>
                <div class="descriptionContainer">
                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >i currently work as a project manager for aggie coding club!</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >right now, i'm teaching 40+ students how to build an ios application using swift/swiftui.</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>

                    <div class="subContainer">
                        <div>
                            <img src={AccPic} />
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" >during the spring 2022 semester, i taught React to this awesome group of freshmen and sophomores!</span>
                        <span class="cursorH" ><Cursor /></span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    );
}

export default Home;