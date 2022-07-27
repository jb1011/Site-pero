import React, { useState } from 'react'
import '../styles/experiences.scss'
import PNG from '../assets/png.png'
import Dripperz from '../assets/Dripperz.png'
import Farandole from '../assets/farandole.png'
import Hyro from '../assets/hyro.png'
import ModalExperience from './ModalExperience'
import { useMediaQuery } from "react-responsive";

function Experiences() {
    const[modal, setModal] = useState(false)
    const [id, setId] = useState()

    const toggleModal = () => {
        setModal(!modal)
    }
    const isMobile = useMediaQuery({ maxWidth: 890 })
    console.log(isMobile)
    return (
        <div>
            {modal && <ModalExperience toggleModal={toggleModal} id={id} />}
            <div style={{ paddingTop: '150px' }} />
            <h1 style={{ textAlign: 'center' }}>Experiences</h1>
            <div className={isMobile ? 'exp-small' : 'exp'}>
                <img className={isMobile ? 'img-small' : 'img'} onClick={() => { toggleModal(); setId(0) }} src={Dripperz} alt="Dripperz" />
                <img className={isMobile ? 'img-small' : 'img'} onClick={() => { toggleModal(); setId(1) }} src={PNG} alt="PNG" />
                <img className={isMobile ? 'img-small' : 'img'} onClick={() => { toggleModal(); setId(2) }} src={Farandole} alt="Farandole" />
            </div>
            <div style={{ paddingTop: '150px' }} />
            <h3 style={{ textAlign: 'center' }}>Hackatons:</h3>
            <div className="exp">
                <img className={isMobile ? 'img-small' : 'img'} onClick={() => { toggleModal(); setId(3) }} src={Hyro} alt="Hyro" />
            </div>
        </div>
    )
}

export default Experiences