import React from 'react'
import './Style/Resume.scss'
//import CV from '../../assets/Edwin_DIJEONT_CV.pdf'
import Nav from '../Home/Nav'
export default function Resume() {
  return (
    <div className='Resume'>
      <nav className='navBar'>
        <h1 className='name'> Edwin</h1>
        <Nav />
      </nav>
      <div className='container'>
        
          <h2 className='job'>Développeur Web Junior</h2>
          <div className="sub-container">
          <div className="left-content">
            <h3 className='title-zone'>
              Infos personelle
            </h3>
            <p className='info-content'>
              Je suis un développeur web junior passionné par le développement web et l'apprentissage de nouvelles technologies. <br></br>
              Je suis un étudiant chez OpenClassRooms à la recherche d'une alternance en Bac+3 Python.
              <ul className='info-contact'>
                <li className='info-contact-item'>
                  <i class="fa-solid fa-mobile-screen"></i>
                  0638481734
                </li>
                <li className='info-contact-item'>
                  <i class="fa-solid fa-envelope">
                  </i>
                  <a href="mailto:edwin.d899@gmail.com"> edwin.d899@gmail.com </a>
                </li>
                <li className='info-contact-item'>
                  <i class="fa-solid fa-map-marker-alt"></i>
                  14 rue curiale, 75019 Paris
                </li>
              </ul>
            </p>
            <h3 className='education'>Formations</h3>
            <p className='education-content'>
              <ul className='education-list' >
                <li className='education-item'>
                  OpenClassRooms Bac+2 développement web
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
                </li>
                <li className='education-item'>
                  Bac professionnel Système Electrique Numérique
                  <p className="education-subtitle">
                    Installation d'équipements électrodomestiques, d'alarme, ;<br></br>
                    Maintenance d'équipements électrodomestiques;<br></br>
                  </p>
                </li>
                <li className='education-item'>
                  BEP Système Electrique Numérique option: Electrodomestique
                  <p className="education-subtitle">
                    Installation d'équipements électrodomestiques;<br></br>
                    Maintenance d'équipements électrodomestiques;<br></br>
                  </p>
                </li>
              </ul>
            </p>
              </div>
            <div className="right-content">
              <h3 className='title-zone'>
                Expériences Professionnelles
              </h3>

              <ul className='experience-list'>
                <li className='experience-item'>
                  Lindt & Sprüngli
                </li>
                <p className='experience-subtitle'>
                Vente de chocolat prenium.
                </p>
                <li className='experience-item'>
                Honor
                </li>
                <p className='experience-subtitle'>
                  Vendeur de téléphone en pop-store.
                </p>
                <li className='experience-item'>
                  French Toast & Co
                </li>
                <p className='experience-subtitle'>
                  Vente de pâtisserie, pain perdu viennoiserie.
                  </p>
                  <li className='experience-item'>
                    Pret A Manger
                  </li>
                  <p className='experience-subtitle'>
                  Encaissement des produits, préparation de produits chaud et de viennoiserie.
                  </p>
                  <li className='experience-item'>
                    Café Pouchkine
                  </li>
                  <p className='experience-subtitle'>
                    Vente de pâtisserie.
                  </p>
                  <li className='experience-item'>
                    McDonald's
                  </li>
                  <p className='experience-subtitle'>
                  Encaissement des commandes, préparation des produits en cuisine. 
                  </p>
              </ul>
          </div>
        </div>
        </div>
    </div>
  )
}
