import React from 'react'
import Nav from './Nav'
import Typewriter from 'typewriter-effect'
import './Style/Home.scss'
import {motion} from 'framer-motion'
export default function Home() {

    
    return (
        <motion.div className='home'
        intial={{ height: 1}}
        animate={{ height: "100vh" }}
        exit={{ height: 0, transition: {duration: 0.5}}}
        >
        <motion.div className='home-without-bg'
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0, transition: {duration: 0.2}}}
        >
            <div className="me-content">
            <h1 className='name'>
                Bonjour,<br></br> 
                je suis Edwin Dijeont
            </h1>
            <h2 className="me">
                Je suis un développeur web junior passionné par <Typewriter
                    options={{
                        autostart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('le développement web.')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('l\'apprentissage de nouvelles technologies.')
                            .pauseFor(2000)
                            .deleteAll()
                            .start()
                    }}
                />
            </h2>
            </div>
            <Nav />
            <div className="social">
                <a className='social-link' href= "https://github.com/EdwinDij" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github"></i>
                </a>
                <a className='social-link' href="https://twitter.com/Edwindijeont" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-twitter"></i>
                </a>
                <a className='social-link' href="https://www.linkedin.com/in/edwin-dijeont-1469a0226" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>
            </motion.div>
        </motion.div>
    )
}
