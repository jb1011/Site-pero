import React from 'react'
import Avax from '../assets/avax.png'

function About() {
    return (
        <div className='center-simple-col'>
            <h1>About me.</h1>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '20px', textAlign: 'center' }}>

                <p >Hi! I am a front-end developer from Paris, France. I specialized in Web3 after I went to school 42 in Paris.
                    I worked 6 months for a big decentralized exchange on
                    <span>
                        <span> Avalanche </span><img  alt='Avax' src={Avax} width={15} height={15} />
                    </span> amongst other NFT projects.
                </p>
                <p>
                    I am always happy and ready to work on the next crypto project.
                    Feel free to reach me via email or linkedIn.
                </p>
                <p>
                    See you soon!
                </p>

            </div>
        </div>
    )
}

export default About