import React from 'react'
import Nav from "../Home/Nav"
import './Style/Contact.scss'

export default function Contact() {
  return (
    <div className='contact'>
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
    </div>

  )
}
