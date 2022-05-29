import React from 'react';
import './Styles/Main.scss'
import Navbar from '../Header/NavbarHeader'
import Typewriter from 'typewriter-effect';
import { type } from '@testing-library/user-event/dist/type';

function Main() {

    return (<div>
        <Navbar />
        <div className="presentation">
            <h1 class="helloWorld">
                Hello World
            </h1>
            <h2 className='me'>
                Je m'appelle Edwin.</h2>
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
                    .start()
                }}
                />
            </p>
        </div>
    </div>
    )
}
export default Main