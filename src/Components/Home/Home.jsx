import React from 'react'
import Typewriter from 'typewriter-effect'
import './Style/Home.scss'
export default function Home() {

    return (
        <div className='home'>

            <div className="me-content">
            <h1 className='name'>
                Edwin Dijeont
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
            <nav className="navLink">
                <p className='link'>Home</p>
                <p className='link'>CV</p>
                <p className='link'>Projets</p>
                <p className='link'>Contact</p>
            </nav>
            <div className="social">
                <a className='social-link' href= "https://github.com/EdwinDij">
                <i class="fa-brands fa-github"></i>
                </a>
                <a className='social-link' href="https://twitter.com/Edwindijeont">
                <i class="fa-brands fa-twitter"></i>
                </a>
                <a className='social-link' href="linkedin.com/in/edwin-dijeont-1469a0226">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
    )
}
