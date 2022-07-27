import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import ButtonSocial from './components/ButtonSocial'
import ModalSocial from './components/ModalSocial'
import Experiences from './components/Experiences'
import Contact from './components/Contact'

//pallette:
// #000000
// #14213d
// #fca311
// #e5e5e5
// #FFF

function App() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  
  useEffect(() => {
    modal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''
  }, [modal])

  return (
    <div>
      {modal && <ModalSocial toggleModal={toggleModal} />}
      <Hero />
      <Experiences />
      <Skills />
      <ButtonSocial toggleModal={toggleModal} />
      <div style={{paddingTop: '50px', marginTop:'50px', borderTop: '1px solid #fca311'}}/>
      <Contact />
    </div>
  );
}

export default App;
