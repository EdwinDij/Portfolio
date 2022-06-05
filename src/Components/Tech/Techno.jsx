import React from 'react'
import './Styles/Techno.scss'
import mysql from '../assets/mysql.png'
import mongo from '../assets/logomongo.png'
export default function Techno() {
    return (<div className='stack'>
        <h2 className='title-section' id='technologie'>
            Technologies
        </h2>
        <div className='stack-content'>
            <div className='techno'>
                <div className='techno-card'>
                    <i class="fa-brands fa-tech fa-html5"></i>
                    <span className='stack-name'>HTML</span>
                </div>
                <div className='techno-card'>
                    <i class="fa-brands fa-tech fa-css3"></i>
                    <span className='stack-name'>CSS</span>
                </div>
                <div className='techno-card'>
                    <i class="fa-brands fa-tech fa-js-square"></i>
                    <span className='stack-name'> Javascript</span>
                </div>
                <div className='techno-card'>
                    <i class="fa-brands fa-tech fa-react"></i>
                   <span className='stack-name'>React</span>
                </div>
                <div className="techno-card">
                    <i class="fa-brands fa-tech fa-node-js"></i>
                    <span className='stack-name'>Node.js</span>
                </div>
                <div className="techno-card">
                    <img className='img-logo' src={mysql} alt ="mysql logo"/>
                    <span className='stack-name'>Mysql</span>
                </div>
                <div className="techno-card">
                    <img className='img-logo' src={mongo} alt ="mongodb logo"/>
                    <span className='stack-name'>MongoDB</span>
                </div>

            </div>
        </div>
    </div>
    )
}
