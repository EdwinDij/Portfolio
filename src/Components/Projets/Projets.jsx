import React from 'react'
import "./Styles/Projets.scss"
import reservia from "../assets/reservia.png"
import ohmyfood from "../assets/ohmyfood.png"
import kanap from "../assets/kanap.png"
import piiquante from "../assets/piiquante.png"

export default function Projets() {

    return (
        <div className='project'>
            <h2 className='title-section' id='projets'>
                Projets
            </h2>

            <div className='project-content'>
                <div className="project-card" id="html">
                    <figure className="snip1585">
                        <img src={reservia} className="img-project" alt="Réservia" />
                        <a href="https://edwindij.github.io/version-avant-29-09-21-EdwinDijeont_2_31102021/">
                            <figcaption>
                                <h3>Réservia <span>HTML - CSS</span></h3>
                            </figcaption>
                        </a>
                    </figure>
                    <div className="project-detail">
                        <p className='detail'>
                            Réservia est un site web qui permet de réserver des restaurants.
                            Il est créé en HTML et CSS.<br></br>
                            Usage de flex et grid.<br></br>
                            Responsive design.
                        </p>
                    </div>
                </div>

                <div className="project-card" id="html">
                    <figure className="snip1585">
                        <img src={ohmyfood} className="img-project" alt="Oh my food" />
                        <a href="https://edwindij.github.io/EdwinDijeont_3_26112021/">
                            <figcaption>
                                <h3>Oh my food <span>HTML - CSS</span></h3>
                            </figcaption>
                        </a>
                    </figure>
                    <div className="project-detail">
                        <p className='detail'>
                            Oh my food est un site web qui permet de réserver des restaurants.<br></br>
                            Il est créé en HTML et CSS.<br></br>
                            Usage de flex et grid.<br></br>
                            Responsive design.<br></br>
                            Usage d'animation sans JavaScript, ni bootstrap.
                        </p>
                    </div>
                </div>
                <div className='project-card' id="javascript">
                    <figure className="snip1585">
                        <img src={kanap} className="img-project" alt="Kanap" />
                        <a href="https://github.com/EdwinDij/EdwinDijeont_5_13022022-">
                            <figcaption>
                                <h3>Kanap <span>JS</span></h3>
                            </figcaption>
                        </a>
                    </figure>
                    <div className="project-detail">
                        <p className='detail'>
                            Kanap est un site web qui permet de commander des canapés.<br></br>
                            Il est créé en JavaScript.<br></br>
                            Utilisation d'API.
                        </p>
                    </div>
                </div>
                <div className='project-card' id="javascript node.js">
                    <figure className="snip1585">
                        <img src={piiquante} className="img-project" alt="Piiquante" />
                        <a href="https://github.com/EdwinDij/EdwinDij-EdwinDijeont_6_03032022--.git">
                            <figcaption>
                                <h3>Piiquante <span>JS - MongoDB - Node.Js</span></h3>
                            </figcaption>
                        </a>
                    </figure>
                    <div className="project-detail">
                        <p className='detail'>
                            Piiquante est un site web de notation de sauces piquantes.<br></br>
                            Le back-end est créé en Node.js et MongoDB.<br></br>
                        </p>
                    </div>
                </div>

                < div className="project-card" id="react node.js">
                    <figure className="snip1585">
                        <img src={piiquante} className="img-project" alt="Groupomania" />
                        <a href="https://github.com/EdwinDij/EdwinDij-EdwinDijeont_6_03032022--.git">
                            <figcaption>
                                <h3>Groupomania <span>React - Node.js - Mysql</span></h3>
                            </figcaption>
                        </a>
                    </figure>
                    <div className="project-detail">
                        <p className='detail'>
                            Groupomania est un réseaux social d'entreprise.<br></br>
                            Le back-end est créé en Node.js et Mysql pour la base de donnée.<br></br>
                            Le front-end est créé en React.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
