import React, { useState } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import ButtonSocial from './components/ButtonSocial'
import ModalSocial from './components/ModalSocial'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import About from './components/About'
import Connection from './components/Connection'
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';

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

  const getLibrary = (provider) => {
    const library = new Web3Provider(provider, 'any');
    library.pollingInterval = 15000;
    return library;
  };
  return (
    <Web3ReactProvider getLibrary={getLibrary} >
      {modal && <ModalSocial toggleModal={toggleModal} />}
      <div className="top">
        <Hero />
      </div>
      <About />
      <Skills />
      <Experiences />
      <ButtonSocial toggleModal={toggleModal} />
      <Connection />
      <div style={{ paddingTop: '50px', marginTop: '50px' }} />
      <Contact />
    </Web3ReactProvider>
  );
}

export default App;
