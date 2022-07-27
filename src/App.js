import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import ButtonSocial from './components/ButtonSocial'
import ModalSocial from './components/ModalSocial'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import About from './components/About'
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
  
  return (
    <div>
      {modal && <ModalSocial toggleModal={toggleModal} />}
      <Hero />
      <About />
      <Experiences />
      <Skills />
      <ButtonSocial toggleModal={toggleModal} />
      <div style={{paddingTop: '50px', marginTop:'50px'}}/>
      <Contact />
    </div>
  );
}

export default App;
