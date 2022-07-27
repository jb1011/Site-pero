import React from 'react'
import '../styles/hero.scss'
// import { useMediaQuery } from "react-responsive";

function Hero() {
    // const isMobile = useMediaQuery({ minWidth: 890 })

    return (
        <>
            <div className='center-page-col'>
                <div className='sun'>
                    <div className='text-circle'>
                        <h1>Jean-Baptiste Demenet</h1>
                        <h3 >Front-end developer.</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero