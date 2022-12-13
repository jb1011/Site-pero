import React from 'react'

function About() {
    return (
        <div className='center-simple-col'>
            <h1>About me</h1>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '20px', textAlign: 'center' }}>
                <p>
                    Hi! I am a front-end developer from Paris, France. I have a serious passion for Web 3.0, decentralised finance.
                    <br />Feel free to contact me on linkedin or my email.
                </p>
            </div>
        </div>
    )
}

export default About