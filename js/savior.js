"use strict";
/*******************************************************
 *     savior.js - 40p.
 *
 *     About time, savior - we need your help!
 *     Dr. DOM has attacked our webpage and spread his
 *     chaos all over it! We called our heroes, but he
 *     took them all captive! He summoned his list of
 *     minions to bother our users. We are in deep trouble!
 *
 *     Please, savior, >>RESTORE OUR OLD WEBPAGE<<!
 *     The people from the internets need you!
 *
 *     We shouldn't need to talk about this, but please,
 *     savior, stick to our ways and traditions! Do not
 *     fall for the dark side, don't use dark HTML or CSS
 *     magic to save us! Lydia, the goddess of judgment
 *     is watching. We have to do it the right way.
 *     The JavaScript way!
 *
 *     Bratlsoft - 2026-03-15
 *******************************************************/

/**
 *  1:
 * First of all, we need to be able to read the text again,
 * without the risk of catching an eye infection!
 */
const paragraphs = document.getElementsByTagName("p");
for( const p of paragraphs ) {
    p.style.color = "";
    p.style.backgroundColor = "";
}

/**
 *  2:
 * Great job! So much easier on the eyes! Now, let's tackle those minions!
 * Can't we just remove them all together?
 */

const minions = document.querySelector("ul");
    minions.remove();


/**
 *  3:
 * Wow! You are so powerful! Quick now, set our heroes of the web free!
 * And while at it, let the world know again, that they are back in town!
 */

const heroList = document.getElementById("heroes_of_the_web");
heroList.removeAttribute("style");
//what are these names....Brad Git.... seriously?

/**
 *  4:
 * Our Webpage is safe again! But Dr. Dom is still holding our Headline as a hostage!
 * Do your thing, savior!
 */

const title = document.getElementById("title");
title.textContent = "Ha! You thought you played us now, didn't you!? Now go rot in the dungeons where you belong!"

const message = document.getElementById("message");
message.textContent = "Dr. DOM, you plain ol' fool. Have you not learned anything yet? You can't beat us, we're too " +
    "strong and yet you try and try again and again. If we were barbarians, we would've said 'Off with his head!' a " +
    "long time ago. But we're not, so off to the dungeons you go!"
//I'm having way too much fun with this lol

const allparagraphs = document.querySelectorAll("p");
allparagraphs[1].textContent = "Now that Dr. DOM and his minions rot in the Dungeons, let me introduce you to our heroes: "

/**
 *  5:
 * You saved the day, again! I knew I could count on you. Our Website is restored,
 * our heroes are freed and there is no sign, Dr. DOM has ever done his evil.
 *
 * It might sound paranoid. But I can't get rid of the feeling, that he is still here,
 * somewhere in the DOM. I can still feel his Code. Can you identify the source and remove it?
 */

const allscripts = document.getElementsByTagName("script");
for (const script of allscripts) {
    if (script.getAttribute("src") === "js/dr.dom.js") {
        script.remove();
    }
}

