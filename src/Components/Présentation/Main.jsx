import React from 'react';
import './Styles/Main.scss'
import Navbar from '../Header/NavbarHeader'
import Typewriter from 'typewriter-effect';

function Main() {

    return (<div>
        <Navbar />
        <div className="presentation">
            <h1 className="helloWorld">
                Hello World
            </h1>
            <h2 className='me'>
                Je m'appelle Edwin.
            </h2>
            <p className='aboutMe'>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString("Je suis un développeur Web front-end junior.")
                            .pauseFor(2000)
                            .deleteAll()
                        typewriter.typeString("Je suis passioné par la tech, l'informatique et les jeux vidéos")
                            .pauseFor(2000)
                            .deleteAll()
                        typewriter.typeString("J'aime apprendre et découvrir de nouvelle chose")
                            .pauseFor(2000)
                            .deleteAll()
                            .start()
                    }}
                />
            </p>
        </div>
    </div>
    )
}
export default Main