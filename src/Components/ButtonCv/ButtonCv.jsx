import React from 'react'
import CV from '../../assets/Edwin_DIJEONT_CV.pdf'

export default function ButtonCv() {
    return (
        <div className='ButtonCv'>
            <a href={CV} target="_blank" rel="noopener noreferrer" >
                <button name="download" className='download'>
                Télécharger mon CV
                </button>
            </a>
        </div>
    )
}
