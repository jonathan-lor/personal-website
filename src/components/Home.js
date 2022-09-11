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
        "an aspiring ui/ux designer,",
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

        let revealBars = document.querySelectorAll(".box");
        revealBars.forEach((bar) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: bar,
                    //scrub: 1,
                    //start: "top 90%",
                    //end: "top 60%",
                    //markers: true
                }
            });
            tl.fromTo(bar, { height: 0 }, {
                duration: 1,
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
                    //start: "top 90%",
                    //end: "top 60%",
                    //toggleActions: "restart none none reset"
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


    }, [])
    //pic and background reveal


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
                //toggleActions: "restart none none reset",
                ease: "none"
            }
        });

        tl.to(h2Cursor, { autoAlpha: 1 });
        tl.to(h2, { duration: .5, text: "do-it coding" })
        tl.to(h2Cursor, { duration: 1, opacity: 0 })
        tl.to(b21Cursor, { autoAlpha: 1 });
        tl.to(b21, { duration: 1, text: "i founded do-it coding with one of my best friends in may of 2022!" })
        tl.to(b21Cursor, { duration: 1, opacity: 0 })
        tl.to(b22Cursor, { autoAlpha: 1 });
        tl.to(b22, { duration: 1.5, text: "born out of a desire to teach my little brother how to code, do-it coding started as a coding bootcamp operating out of a local ice cream shop." })
        tl.to(b22Cursor, { duration: 1, opacity: 0 })
        tl.to(b23Cursor, { autoAlpha: 1 });
        tl.to(b23, { duration: 1, text: "in our first coding bootcamp, we taught scratch to 6 elementary-aged kids in preparation for a lego robotics season in the fall." })
        tl.to(b23Cursor, { duration: 1, opacity: 0 })
        tl.to(b24Cursor, { autoAlpha: 1 });
        tl.to(b24, { duration: 1, text: " by the end of summer 2022 however, we had camps running every week, with 1-on-1 tutoring being offered as well!" })

    }, [])
    //text reveal for body and header of each image for doit coding


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
                //toggleActions: "restart none none reset",
                ease: "none"
            }
        });

        tl.to(h1Cursor, { autoAlpha: 1 });
        tl.to(h1, { duration: .5, text: "impact retreat" })
        tl.to(h1Cursor, { duration: 1, opacity: 0 })
        tl.to(b11Cursor, { autoAlpha: 1 });
        tl.to(b11, { duration: 1, text: "from 2020-2022, i served as a counselor and co-chair with impact." })
        tl.to(b11Cursor, { duration: 1, opacity: 0 })
        tl.to(b12Cursor, { autoAlpha: 1 });
        tl.to(b12, { duration: 1.75, text: "impact is a ministry dedicated to connecting incoming texas a&m students to churches and strong christian community in bryan/college station." })
        tl.to(b12Cursor, { duration: 1, opacity: 0 })
        tl.to(b13Cursor, { autoAlpha: 1 });
        tl.to(b13, { duration: 1, text: "as a counselor, i worked alongside my peers to guide and support the incoming students at and beyond retreat." })
        tl.to(b13Cursor, { duration: 1, opacity: 0 })
        tl.to(b14Cursor, { autoAlpha: 1 });
        tl.to(b14, { duration: 1, text: "as a co-chair, i trained and equipped counselors for retreat during the preceding spring semester!" })
        //tl.to(b14Cursor, { duration: 1.5, opacity: 0 })

    }, [])
    //text reveal for body and header of each image for impact

    const h3Ref = useRef();
    const h3CursorRef = useRef();
    const b31Ref = useRef();
    const b31CursorRef = useRef();
    const b32Ref = useRef();
    const b32CursorRef = useRef();
    const b33Ref = useRef();
    const b33CursorRef = useRef();

    useEffect(() => {

        const h3 = h3Ref.current;
        const h3Cursor = h3CursorRef.current;
        const b31 = b31Ref.current;
        const b31Cursor = b31CursorRef.current;
        const b32 = b32Ref.current;
        const b32Cursor = b32CursorRef.current;
        const b33 = b33Ref.current;
        const b33Cursor = b33CursorRef.current;

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: h3,
                //toggleActions: "restart none none reset",
                ease: "none"
            }
        });

        tl.to(h3Cursor, { autoAlpha: 1 });
        tl.to(h3, { duration: .5, text: "aggie coding club" })
        tl.to(h3Cursor, { duration: 1, opacity: 0 })
        tl.to(b31Cursor, { autoAlpha: 1 });
        tl.to(b31, { duration: 1, text: "i currently work as a project manager for aggie coding club." })
        tl.to(b31Cursor, { duration: 1, opacity: 0 })
        tl.to(b32Cursor, { autoAlpha: 1 });
        tl.to(b32, { duration: 1, text: "in the spring 2022 semester, i taught react to an awesome group of freshmen and sophomores!" })
        tl.to(b32Cursor, { duration: 1, opacity: 0 })
        tl.to(b33Cursor, { autoAlpha: 1 });
        tl.to(b33, { duration: 1, text: "in the fall 2022 semester, i'm excited to continue my teaching role by leading workshops on iOS development!" })
    }, [])
    //text reveal for body and header of each image for acc


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
                <div class="subContainer">
                    <div class="box"></div>
                    <div class="reveal">
                        <img src={DoitKids} />
                    </div>
                </div>
                <div class="descriptionContainer">
                    <div class="headerDescCursorContainer">
                        <a class="descHeaderText" ref={h2Ref} href="https://doitcoding.com/"></a>
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
                            <img src={DoitTeach} />
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" ref={b23Ref}></span>
                        <span class="cursorH" ref={b23CursorRef}><Cursor /></span>
                    </div>

                    <div class="subContainer">
                        <div class="box"></div>
                        <div class="reveal">
                            <img src={DoitNews} />
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" ref={b24Ref}></span>
                        <span class="cursorH" ref={b24CursorRef}><Cursor /></span>
                    </div>
                </div>
            </div>


            <div class="contentContainer">
                <div class="subContainer">
                    <div class="box"></div>
                    <div class="reveal">
                        <img src={RollCall} />
                    </div>
                </div>
                <div class="descriptionContainer">
                    <div class="headerDescCursorContainer">
                        <a class="descHeaderText" ref={h1Ref} href="https://impactretreat.com/"></a>
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
                            <img src={BSimStaff} />
                        </div>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" ref={b13Ref}></span>
                        <span class="cursorH" ref={b13CursorRef}><Cursor /></span>
                    </div>

                    <div class="subContainer">
                        <div class="box"></div>
                        <div class="reveal">
                            <img src={BSimFreshmen} />
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
                        <img src={AccPic} />
                    </div>
                </div>
                <div class="descriptionContainer">
                    <div class="headerDescCursorContainer">
                        <a class="descHeaderText" ref={h3Ref} href="http://www.aggiecodingclub.com/"></a>
                        <span class="cursorH" ref={h3CursorRef}><Cursor /></span>
                    </div>
                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" ref={b31Ref}></span>
                        <span class="cursorH" ref={b31CursorRef}><Cursor /></span>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" ref={b32Ref}></span>
                        <span class="cursorH" ref={b32CursorRef}><Cursor /></span>
                    </div>

                    <div class="headerBodyCursorContainer">
                        <span class="descBodyText" ref={b33Ref}></span>
                        <span class="cursorH" ref={b33CursorRef}><Cursor /></span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    );
}

export default Home;