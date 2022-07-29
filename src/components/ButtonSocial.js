import React from 'react'
import '../styles/button-social.scss'

function ButtonSocial({ toggleModal }) {
    return (
        <div onClick={toggleModal}>
            <div className='sun-sm'>
                <div className=''>
                    <p style={{ fontFamily: 'Lobster Two' }}>Find me.</p>
                </div>
            </div>
        </div>
    )
}

export default ButtonSocial