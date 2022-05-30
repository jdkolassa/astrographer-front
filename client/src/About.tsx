import { CPlaceholder } from '@coreui/react'
import React from 'react'

// A very boring about page

const About = () => {
  return (
    <div className="aboutPage">
        <h2>About Astrographer</h2>
        <p>Astrographer is a combination of learning, demonstration, and passion. <a href="https://github.com/jdkolassa/astrographer-front">Check out the repo!</a></p>
        <ol>
            <li>
                Through building Astrographer, I have learned a significant amount of React and Node programming. More importantly, I have learned about project architecture, going through a few different iterations of this idea. I learn best by doing, facing all the bugs and frustrations head-on. (I also watch and follow a variety of tutorials, to see how many different ways one can skin a cat.)
            </li>
            <li>
                Through building Astrographer, I have a completed project that I can show to prospective employers and clients to demonstrate that yes, I do actually know how to build well-structured things in React, both on the front <em>and</em> the back-end. 
            </li>
            <li>
                Through building Astrographer, I have combined my interests in computer programming with my interests in space. I mean, it's <em>space</em>! How much cooler can you get? Well, since the average temperature of outer space is a mere 2.7 kelvins (-270.45&#8451; or -454.81&#8457;), not very much. 
            </li>
        </ol>
        {/* TODO: Add links to proper repos and give thanks */}
        <p>Astrographer is a MERN app (for non-developers, it uses React for the part you see, Node and Express for the parts you don't, and MongoDB as a database to store all the stellar information.) Many thanks go to <CPlaceholder color="secondary" style={{width: "25px"}}/> and his work in creating the HYG dataset. Without this dataset, this project wouldn't exist. </p>
        <h2>About Jeremy</h2>
        <p>I'm a web developer based in the Washington DC area. I started my career in communications for think tanks, but I first started coding as a child when my father (himself a software engineer) brought home a book on HTML and CSS, and I just taught myself from there. I think I have a unique background combining nonprofit communications, project management, and web development. If you want to see more of my work, check out my portfolio site.</p>
    </div>
  )
}

export default About