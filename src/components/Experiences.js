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
    const [isShown, setIsShown] = useState(0);

    const toggleModal = () => {
        setModal(!modal)
    }
    const isMobile = useMediaQuery({ maxWidth: 890 })
    return (
        <div>
            {modal && <ModalExperience toggleModal={toggleModal} id={id} />}
            <div style={{ paddingTop: '150px' }} />
            <h1 style={{ textAlign: 'center' }}>Experiences</h1>
            <div className={isMobile ? 'exp-small' : 'exp'}>
                <img className={isMobile ? 'img-small' : 'img'} onMouseEnter={() => setIsShown(1)} onMouseLeave={() => setIsShown(false)} onClick={() => { toggleModal(); setId(2) }} src={Farandole} alt="Farandole" />
                <img style={{borderRadius: '50%'}} className={isMobile ? 'img-small' : 'img'} onMouseEnter={() => setIsShown(1)} onMouseLeave={() => setIsShown(false)} onClick={() => { toggleModal(); setId(0) }} src={Dripperz} alt="Dripperz" />
                <img className={isMobile ? 'img-small' : 'img'} onMouseEnter={() => setIsShown(1)} onMouseLeave={() => setIsShown(false)} onClick={() => { toggleModal(); setId(1) }} src={PNG} alt="PNG" />
            </div>
            {isShown === 1 ? <p style={{ textAlign: 'center', height: '20px' }}>Click me.</p> : <p style={{ height: '20px' }}></p>}
            <div style={{ paddingTop: '150px' }} />
            <h3 style={{ textAlign: 'center' }}>Hackaton</h3>
            <div className="exp">
                <img className={isMobile ? 'img-small' : 'img'} onMouseEnter={() => setIsShown(2)} onMouseLeave={() => setIsShown(false)} onClick={() => { toggleModal(); setId(3) }} src={Hyro} alt="Hyro" />
            </div>
            {isShown === 2 ? <p style={{ textAlign: 'center', height: '20px' }}>Click me.</p> : <p style={{ height: '20px' }}></p>}
        </div>
    )
}

export default Experiences