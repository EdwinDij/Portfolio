import React from 'react'
import './Style/Resume.scss'
import CV from '../../assets/Edwin_DIJEONT_CV.pdf'
import NavbarLeft from '../NavbarLeft/NavbarLeft'
import Nav from '../Home/Nav'
import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <div className='Resume'>
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
          Développeur Web Junior
        </h2>
        <div className="sub-container">
          <div className="left-content">
            <h3 className='title-zone line-1'>
              Infos personelle
            </h3>
            <motion.div className="personnal-info"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
            >

              <div className='info-content'>
                <p>
                  Je suis un développeur web junior passionné par le développement web et l'apprentissage de nouvelles technologies. <br></br>
                  Je suis un étudiant chez OpenClassRooms à la recherche d'une alternance en Bac+3 Python.
                </p>
                <div className='info-contact'>
                  <p className='info-contact-item'>
                    <i className="fa-solid fa-mobile-screen"></i>
                    0638481734
                  </p>
                  <p className='info-contact-item'>
                    <i className="fa-solid fa-envelope">
                    </i>
                    <a href="mailto:edwin.d899@gmail.com"> edwin.d899@gmail.com </a>
                  </p>
                  <p className='info-contact-item'>
                    <i className="fa-solid fa-map-marker-alt"></i>
                    14 rue curiale, 75019 Paris
                  </p>
                </div>
              </div>
            </motion.div>
            <h3 className='title-zone line-2'>
              Formations
            </h3>
            <div className="life-zone">
              <motion.h4 className='education-item'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 4 } }}
              >

                OpenClassRooms Bac+2 développement web
              </motion.h4>
              <motion.p className="education-subtitle"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 5 } }}
              >

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
              </motion.p>

              <motion.h4 className='education-item'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 6 } }}>

                Bac professionnel Système Electrique Numérique
              </motion.h4>
              <motion.p className="education-subtitle"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 7 } }}
              >
                Installation d'équipements électrodomestiques, d'alarme, ;<br></br>
                Maintenance d'équipements électrodomestiques;<br></br>
              </motion.p>

              <motion.h4 className='education-item'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 8 } }}
              >
                BEP Système Electrique Numérique option: Electrodomestique
              </motion.h4>
              <motion.p className="education-subtitle"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 9 } }}
              >
                Installation d'équipements électrodomestiques;<br></br>
                Maintenance d'équipements électrodomestiques;<br></br>

              </motion.p>
            </div>
          </div>

          <div className="right-content">
            <h3 className='title-zone line-3'>
              Expériences Professionnelles
            </h3>

            <div className='life-zone'>
              <motion.h4 className='experience-item'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}>
                Lindt & Sprüngli
              </motion.h4>
              <p className='experience-subtitle'>
                Vente de chocolat prenium.
              </p>
              <motion.h4 className='experience-item'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 2.5 } }}
              >
                Honor
              </motion.h4>
              <p className='experience-subtitle'>
                Vendeur de téléphone en pop-store.
              </p>
              <motion.h4 className='experience-item'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 3.5 } }}
              >
                French Toast & Co
              </motion.h4>
              <p className='experience-subtitle'>
                Vente de pâtisserie, pain perdu viennoiserie.
              </p>
              <motion.h4 className='experience-item'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 4.5 } }}>
                Pret A Manger
              </motion.h4>
              <p className='experience-subtitle'>
                Encaissement des produits, préparation de produits chaud et de viennoiserie.
              </p>
              <motion.h4 className='experience-item'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 5.5 } }}
              >
                Café Pouchkine
              </motion.h4>
              <p className='experience-subtitle'>
                Vente de pâtisserie.
              </p>
              <motion.h4 className='experience-item'
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 6.5 } }}
              >
                McDonald's
              </motion.h4>
              <p className='experience-subtitle'>
                Encaissement des commandes, préparation des produits en cuisine.
              </p>
            </div>
          </div>
        </div>
        <NavbarLeft />
      </div>
    </div>
  )
}
