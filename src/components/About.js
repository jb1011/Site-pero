import React from 'react'
import Avax from '../assets/avax.png'

function About() {
    return (
        <div className='center-simple-col'>
            <h1>About me.</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '20px' }}>

                <p>Hi! I am a front-end developer from Paris, France. I specialized in Web3 after I went to school 42 in Paris.
                    I worked 6 months for a big decentralized exchange on
                    <span>
                        <span> Avalanche </span><img  alt='Avax' src={Avax} width={15} height={15} />
                    </span>.
                </p>

            </div>
        </div>
    )
}

export default About