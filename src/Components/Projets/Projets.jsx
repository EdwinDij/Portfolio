import React from 'react'
import "./Styles/Projets.scss"
import reservia from "../assets/reservia.png"
import ohmyfood from "../assets/ohmyfood.png"
import kanap from "../assets/kanap.png"
export default function Projets() {
    return (
        <div className='project'>
            <h2 className='title-section' id='projets'>
                Projets
            </h2>

            <figure className="snip1585">
                <img src={reservia} alt="Réservia" />
                <a href="https://edwindij.github.io/version-avant-29-09-21-EdwinDijeont_2_31102021/">
                <figcaption>
                    <h3>Réservia <span>HTML - CSS</span></h3>
                </figcaption>
                </a>
            </figure>

            <figure className="snip1585">
                <img src={ohmyfood} alt="Oh my food" />
                <a href="https://edwindij.github.io/EdwinDijeont_3_26112021/">
                <figcaption>
                    <h3>Oh my food <span>HTML - CSS</span></h3>
                </figcaption>
                </a>
            </figure>
            <figure className="snip1585">
                <img src={kanap} alt="Kanap" />
                <a href="https://github.com/EdwinDij/EdwinDijeont_5_13022022-">
                <figcaption>
                    <h3>Kanap <span>HTML - CSS - JS</span></h3>
                </figcaption>
                </a>
            </figure>
            <figure className="snip1585">
                <img src={kanap} alt="Kanap" />
                <a href="https://github.com/EdwinDij/EdwinDijeont_5_13022022-">
                <figcaption>
                    <h3>Kanap <span>HTML - CSS - JS</span></h3>
                </figcaption>
                </a>
            </figure>

        </div>
    )
}
