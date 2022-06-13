import React from 'react'
import Nav from "../Home/Nav"
import './Style/Contact.scss'
import {motion} from 'framer-motion'
export default function Contact() {
  return (
    <div className='contact'>
      <motion.nav className='navBar'
          initial={{height: "100vw",}}
          animate={{ height: "4rem" , transition: {duration: 1}}}
          exit={{height: "100vw", transition: {duration: 0.5}}}>
        <h1 className='name'> Edwin</h1>
        <Nav />
      </motion.nav>
        <div className="container container-form">
          <form className="form">
            <input type="text" placeholder="Nom" className="input" />
            <input type="text" placeholder="Prénom" className="input" />
            <input type="text" placeholder="Email" className="input" required="required" />
            <textarea placeholder="Message" className="input" required="required" />
            <button type='submit' className="button send">Envoyer</button>
          </form>

        </div>
    </div>

  )
}
