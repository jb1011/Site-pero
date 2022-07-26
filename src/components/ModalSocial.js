import React from 'react'
import '../styles/modal-social.scss'


function ModalSocial({ toggleModal }) {
    return (
        <div className='layout' onClick={toggleModal}>
            <div className='modal center-simple' onClick={(e) => e.stopPropagation()}>

                <a href="https://www.linkedin.com/in/jean-baptiste-d-6309091a6/" className="fa-footer" rel='noopener noreferrer' target='_blank'>
                    <i className="fa fa-linkedin fa-3x color-icon"></i>
                </a>
                <a href="https://github.com/jb1011" className="fa-footer" rel='noopener noreferrer' target='_blank'>
                    <i className="fa fa-github fa-3x color-icon"></i>
                </a>
            </div>
        </div>
    )
}

export default ModalSocial