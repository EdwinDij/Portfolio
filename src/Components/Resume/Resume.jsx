import React from 'react'
import './Style/Resume.scss'
//import CV from '../../assets/Edwin_DIJEONT_CV.pdf'
import NavbarLeft from '../NavbarLeft/NavbarLeft'
import Nav from '../Home/Nav'
import {motion} from 'framer-motion'
export default function Resume() {
  return (
    <motion.div className='Resume'
    intial={{ width:0}}
    animate={{ width:"100%"}}
    exit={{ x: window.innerWidth,transition: {duration: 0.3}}}
    >
      <nav className='navBar'>
        <h1 className='name'> Edwin</h1>
        <Nav />
      </nav>
      <div className='container'>

        <h2 className='job'>Développeur Web Junior</h2>
        <div className="sub-container">
          <div className="left-content">
            <h3 className='title-zone line-1'>
              Infos personelle
            </h3>
            <div className="personnal-info">
              <p className='info-content'>
                Je suis un développeur web junior passionné par le développement web et l'apprentissage de nouvelles technologies. <br></br>
                Je suis un étudiant chez O    penClassRooms à la recherche d'une alternance en Bac+3 Python.
                <ul className='info-contact'>
                  <h4 className='info-contact-item'>
                    <i class="fa-solid fa-mobile-screen"></i>
                    0638481734
                  </h4>
                  <h4 className='info-contact-item'>
                    <i class="fa-solid fa-envelope">
                    </i>
                    <a href="mailto:edwin.d899@gmail.com"> edwin.d899@gmail.com </a>
                  </h4>
                  <h4 className='info-contact-item'>
                    <i class="fa-solid fa-map-marker-alt"></i>
                    14 rue curiale, 75019 Paris
                  </h4>
                </ul>
              </p>
            </div>
            <h3 className='title-zone line-2'>
              Formations
            </h3>
            <div className="life-zone">
            <h4 className='education-item'>
              OpenClassRooms Bac+2 développement web
            </h4>
            <p className="education-subtitle">
              Découper, assembler et intégrer tous les éléments d’une maquette graphique en HTML5 et CSS ; <br></br>
              Animer les pages web avec CSS3 ;<br></br>
              Appliquer les standards du web et les normes en vigueur ;<br></br>
              Construire un site web fluide s’adaptant à tout type d’écran (web, smartphone et tablette) ;<br></br>
              Améliorer le référencement naturel en utilisant les balises selon leur sémantique ;<br></br>
              Faire réagir la page web en fonction des actions de l’utilisateur en JavaScript ;<br></br>
              Se connecter à un service web pour exploiter des données tierces (API) ;<br></br>
              Gérer les comptes utilisateurs ;<br></br>
              Concevoir un site maintenable grâce à la gestion des erreurs et exceptions ;<br></br>
              Créer, gérer et afficher le contenu d’une base de données.
            </p>
            <div className="educatioin"></div>
            <h4 className='education-item'>
              Bac professionnel Système Electrique Numérique
            </h4>
            <p className="education-subtitle">
              Installation d'équipements électrodomestiques, d'alarme, ;<br></br>
              Maintenance d'équipements électrodomestiques;<br></br>
            </p>

            <h4 className='education-item'>
              BEP Système Electrique Numérique option: Electrodomestique
            </h4>
            <p className="education-subtitle">
              Installation d'équipements électrodomestiques;<br></br>
              Maintenance d'équipements électrodomestiques;<br></br>

            </p>
            </div>
          </div>

          <div className="right-content">
            <h3 className='title-zone line-3'>
              Expériences Professionnelles
            </h3>

            <div className='life-zone'>
              <h4 className='experience-item'>
                Lindt & Sprüngli
              </h4>
              <p className='experience-subtitle'>
                Vente de chocolat prenium.
              </p>
              <h4 className='experience-item'>
                Honor
              </h4>
              <p className='experience-subtitle'>
                Vendeur de téléphone en pop-store.
              </p>
              <h4 className='experience-item'>
                French Toast & Co
              </h4>
              <p className='experience-subtitle'>
                Vente de pâtisserie, pain perdu viennoiserie.
              </p>
              <h4 className='experience-item'>
                Pret A Manger
              </h4>
              <p className='experience-subtitle'>
                Encaissement des produits, préparation de produits chaud et de viennoiserie.
              </p>
              <h4 className='experience-item'>
                Café Pouchkine
              </h4>
              <p className='experience-subtitle'>
                Vente de pâtisserie.
              </p>
              <h4 className='experience-item'>
                McDonald's
              </h4>
              <p className='experience-subtitle'>
                Encaissement des commandes, préparation des produits en cuisine.
              </p>
            </div>
          </div>
        </div>
        <NavbarLeft />
      </div>

    </motion.div>
  )
}
