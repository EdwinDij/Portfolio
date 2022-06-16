import React from 'react';
import './Style/Projects.scss';
import Nav from '../Home/Nav';
import NavbarLeft from '../NavbarLeft/NavbarLeft';
import { motion } from 'framer-motion';
import Réservia from "../../assets/Réservia.png";
import Ohmyfood from "../../assets/Ohmyfood.png";
import Kanap from "../../assets/Kanap.png";
import Piiquante from "../../assets/Piiquante.png";
import Groupomania from "../../assets/Groupomania.png";

export default function Projects() {
  return (
    <div className='content-projects'>
      <motion.nav className='navBar'
        initial={{ height: "100vw", }}
        animate={{ height: "4rem", transition: { duration: 1 } }}
        exit={{ height: "100vw", transition: { duration: 0.5 } }}
      >
        <h1 className='name'> Edwin</h1>
        <Nav />
      </motion.nav>
      <div className='container resp-container'>
        <h2 className='page-name'>
          Projets
        </h2>
        {/*      <div className="project-button">
          <input type="button" value="All" className='button' />
          <input type="button" value="HTML" className='button' />
          <input type="button" value="Javascript" className='button' />
          <input type="button" value="React" className='button' />
          <input type="button" value="Node" className='button' />
        </div>
  */}
        <div className='project-container'>
          <div className='project-card'>

              <figure className="snip1576" id="html">
                <img src={Réservia} alt="Projet réservia" />
                <figcaption>
                  <h3>Réservia <span>html-css</span></h3>
                </figcaption>
                <a href="https://edwindij.github.io/version-avant-29-09-21-EdwinDijeont_2_31102021/" target="_blank" rel="noopener noreferrer"></a>
              </figure>



              <figure className="snip1576" id="html">
                <img src={Ohmyfood} alt="Projet Ohmyfood" />
                <figcaption>
                  <h3>OHmyfood <span>html-css</span></h3>
                </figcaption>
                <a href="https://edwindij.github.io/EdwinDijeont_3_26112021/" target="_blank" rel="noopener noreferrer"></a>
              </figure>
            


              <figure className="snip1576" id="html">
                <img src={Kanap} alt="Projet Kanap" />
                <figcaption>
                  <h3>Kanap <span>Javascript</span></h3>
                </figcaption>
                <a href="https://github.com/EdwinDij/EdwinDijeont_5_13022022-/tree/master/Kanap" target="_blank" rel="noopener noreferrer"></a>
              </figure>



              <figure className="snip1576" id="html">
                <img src={Piiquante} alt="Projet Piiquante" />
                <figcaption>
                  <h3>Piquante <span>Node.js - MongoDB</span></h3>
                </figcaption>
                <a href="https://github.com/EdwinDij/EdwinDij-EdwinDijeont_6_03032022--" target="_blank" rel="noopener noreferrer"></a>
              </figure>
    


              <figure className="snip1576" id="html">
                <img src={Groupomania} alt="Projet groupomania" />
                <figcaption>
                  <h3>Groupomania <span>ReactJs - Node.js - Mysql</span></h3>
                </figcaption>
                <a href="https://github.com/EdwinDij/groupomania" target="_blank" rel="noopener noreferrer"></a>
              </figure>


          </div>
        </div>
        <NavbarLeft />
      </div>
    </div>
  )
}
