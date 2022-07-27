import React from 'react'

function Contact() {
    return (
        <div className='center-simple-col' style={{paddingBottom: '50px'}}>
            <div className='center-simple'>
                <a href="https://www.linkedin.com/in/jean-baptiste-d-6309091a6/" className="fa-footer" rel='noopener noreferrer' target='_blank'>
                    <i className="fa fa-linkedin fa-3x color-icon"></i>
                </a>
                <a href="https://github.com/jb1011" className="fa-footer" rel='noopener noreferrer' target='_blank'>
                    <i className="fa fa-github fa-3x color-icon"></i>
                </a>
            </div>
            <a href='mailto:demenet.jb@hotmail.fr' style={{ color: '#fca311', textDecoration: 'none' }}>demenet.jb@hotmail.fr</a>
        </div>
    )
}

export default Contact