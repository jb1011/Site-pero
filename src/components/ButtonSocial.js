import React from 'react'
import '../styles/button-social.scss'

function ButtonSocial({ toggleModal }) {
    return (
        <div onClick={toggleModal}>
            <div className='circle-small pulse-small'>
                <div className='text-circle'>
                    <p>Find me.</p>
                </div>
            </div>
        </div>
    )
}

export default ButtonSocial