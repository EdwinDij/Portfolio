import React from 'react'
import Nav from "../Home/Nav"
import './Style/Contact.scss'
import {motion} from 'framer-motion'
export default function Contact() {
  return (
    <motion.div className='contact'
    intial={{ width:0}}
    animate={{ width:"100%"}}
    exit={{ x: window.innerWidth,transition: {duration: 0.5}}}
    >
      <nav className='navBar'>
        <h1 className='name'> Edwin</h1>
        <Nav />
      </nav>
        <div className="container container-form">
          <form className="form">
            <input type="text" placeholder="Nom" className="input" />
            <input type="text" placeholder="Prénom" className="input" />
            <input type="text" placeholder="Email" className="input" required="required" />
            <textarea placeholder="Message" className="input" required="required" />
            <button type='submit' className="button send">Envoyer</button>
          </form>

        </div>
    </motion.div>

  )
}
