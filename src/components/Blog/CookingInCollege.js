import React from 'react';
import './post.css';
import Navbar from '../Navbar';
import Sidebar from "../Sidebar";
import Cursor from "../Cursor";
import Footer from "../Footer";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { TextPlugin } from "gsap/TextPlugin.js";

import Ingredients from '../images/ingredients.webp'
import Breakfast from '../images/breakfast.webp'
import BeefNRice from '../images/beef_n_rice.webp'


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

function CookingInCollege() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />


            <div class="contentContainerBlog">
                <div class="descriptionContainer">
                    <h1 class="alignLeft">Cooking in College, and the Soon-to-be-Famous "Doits Sauce"</h1>
                    <h2 class="postHeaderText alignLeft">2022-09-29</h2>
                    <h3 class="postHeaderText alignLeft">Cooking in college sucks.</h3>
                    <p class="postBodyText alignLeft" >I’m sure anyone who’s done it agrees with me. More often than not, you’re pressed for time, money, and sanity. Add to that the fact that I’m an ex skinny kid with ambitious calorie goals, and you end up with a recipe for a lot of stress.</p>
                    <p class="postBodyText alignLeft">Every now and then, I find myself with a bit of extra time to put into a somewhat presentable meal like the breakfast pictured below. However, the sad reality is that keeping my bank account intact relegates most of my meals to a mundane amalgamation of protein and carbohydrates.</p>
                </div>
                <div class="subContainerBlog">
                    <div class="alignLeft">
                        <img src={Breakfast} alt='missing' />
                        <figcaption>
                            <i>Breakfast on a Saturday morning. This is usually as good as it gets.</i>

                        </figcaption>
                    </div>
                </div>



                <div class="descriptionContainer">
                    <p class="postBodyText alignLeft"></p>
                    <h3 class="postHeaderText">Day in and day out,</h3>
                    <p class="postBodyText alignLeft">I survived off of dry chicken breast, crumbly ground beef, and more eggs than I care to admit. Couple those things with a generous serving of white rice, and I was definitely hitting my daily macros. Something was missing though.</p>
                    <p class="postBodyText alignLeft">
                        <i>There had to be more to cooking than this.</i>
                    </p>
                    <h3 class="postHeaderText alignLeft">
                        Enter Instagram Reels.
                    </h3>
                    <p class="postBodyText alignLeft">
                        Quite literally a black hole for my precious time, and the object of my attention on this fateful Sunday afternoon. I was scrolling through my algorithm-prescribed dose of fitness content when I was greeted with one of the occasional meal prep videos.
                    </p>
                    <p class="postBodyText alignLeft">
                        From what I remember, the video consisted of a short, foul-mouthed Asian guy yelling about Korean BBQ beef as part of an even more questionable skit. There wasn’t a single chance I was dropping the money for the steak in this recipe, but the sauce/marinade looked pretty freakin’ good.
                    </p>

                    <p class="postBodyText alignLeft">If you're unfamiliar, a basic Korean BBQ sauce is made by blending:</p>

                    <ul class="postBodyText alignLeft">
                        <li>Soy Sauce</li>
                        <li>Sesame Oil</li>
                        <li>Brown Sugar</li>
                        <li>Sliced Onion</li>
                        <li>Chopped Pear</li>
                        <li>Garlic</li>
                    </ul>
                    <p class="postBodyText alignLeft">I ended up going to the grocery store that same afternoon, and replicating the sauce from the video. It didn’t take long for me to decide that I couldn’t be bothered to cut a whole pear and onion every time I wanted to enjoy this sauce. So began my quest for an easier version.</p>
                    <p class="postBodyText alignLeft">The following night, I found myself faced with the oh-so-familiar and unremarkable sight of ground beef and rice for dinner. This time however, I refused to accept such a bland fate.</p>
                    <p class="postBodyText alignLeft">I decided to remix the Korean BBQ sauce by dropping the onion and pear, adding honey, increasing the amount of brown sugar, and sprinkling in a bit of black pepper. I might be slightly biased in saying this, but the result was simply breathtaking.</p>
                    <p class="postBodyText alignLeft">
                        <b>I dubbed this mixture, “Doits Sauce.”</b>
                    </p>
                </div>


                <div class="subContainer">
                    <div class="alignLeft">
                        <img src={Ingredients} alt='missing' />
                        <figcaption>
                            <i>The ingredients for my usual dinner, but with that savory Doits Sauce on the side.</i>
                        </figcaption>
                    </div>
                </div>

                <div class="descriptionContainer">
                    <p class="postBodyText alignLeft"></p>
                    <p class="postBodyText alignLeft">Imagine teriyaki sauce with the gooey consistency of molasses, and enhanced by a nutty aftertaste from a more dominant ratio of sesame oil.</p>
                    <p class="postBodyText alignLeft">Doits Sauce was, in every sense of the term, game changing. It felt illegal to have something this good with such little effort. When describing what it adds to a dish, I can’t help but be reminded of that one scene from <i>Ratatouille</i> where Remy is overcome with colorful bliss after combining strawberry and cheese.</p>
                </div>

                <div class="subContainer">
                    <div class="alignLeft">
                        <img src={BeefNRice} alt='missing' />
                        <figcaption>
                            <i>The final product.</i>
                        </figcaption>
                    </div>
                </div>

                <div class="descriptionContainer">
                    <p class="postBodyText alignLeft"></p>
                    <p class="postBodyText alignLeft">Doits Sauce is now a staple in nearly every dish I cook. It’s a quick, cheap, and delicious splash of color on an otherwise monochrome canvas of a meal.</p>
                    <p class="postBodyText alignLeft">~ Jonathan, creator of Doits Sauce :&#41;</p>
                    <p class="postBodyText alignLeft">Perhaps I’m making too big a deal out of something so insignificant in the grand scheme of things, but I find that the smallest pleasures in life are usually the sweetest.</p>
                </div>



            </div>




            <Footer />

        </div>
    )
}

export default CookingInCollege;