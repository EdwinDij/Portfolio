import React from 'react'
import './Styles/Techno.scss'
import react from "../assets/react512.png"
import js from "../assets/js.png"
import css from "../assets/css3.png"
import html from "../assets/html5.png"


export default function Techno() {
    return (<div>
        <h2 className='title-section' id='technologie'>
            Technologies
        </h2>
        <div className='techno'>
            <div className='techno-card'>
                <img src={html} />
            </div>
            <div className='techno-card'>
                <img src={css} />
            </div>
            <div className='techno-card'>
                <img src={js} />
            </div>
            <div className='techno-card'>
                <img src={react} /> 
            </div>
        </div>
        </div>
    )
}
