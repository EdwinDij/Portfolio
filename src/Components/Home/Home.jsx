import React from 'react'
import Nav from './Nav'
import Typewriter from 'typewriter-effect'
import {Link} from 'react-router-dom'
import './Style/Home.scss'
export default function Home() {

    return (
        <div className='home'>

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
                <a className='social-link' href="linkedin.com/in/edwin-dijeont-1469a0226" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
    )
}
