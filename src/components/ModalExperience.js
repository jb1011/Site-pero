import React from 'react'
import '../styles/modal-social.scss'
import Text from '../store/experiences.json'
import { motion } from "framer-motion"

function ModalExperience({ toggleModal, id }) {

    const onLayerClick = () => {
        document.getElementById('layout').classList.add('disappear');

        setTimeout(() => {
            toggleModal()
        }, 300)
    }
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='layout'
            onClick={onLayerClick}
            id='layout'
        >
            <div className='modal center-simple-col' onClick={(e) => e.stopPropagation()}>
                <div style={{ padding: '20px' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: 0 }}>{Text[id].title}</h3>
                    <p style={{whiteSpace: 'pre-line', verticalAlign: 'bottom'}}>{Text[id].description}</p>
                    <div style={{ display: 'flex', gap: 20, justifyContent: 'center', paddingTop: '20px' }}>
                        <p>Time spent: {Text[id].date}</p>
                        <a style={{ textDecoration: 'none' }} href={Text[id].site} className="fa-footer" rel='noopener noreferrer' target='_blank'>
                            <p style={{ color: '#fca311' }} >Link</p>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ModalExperience