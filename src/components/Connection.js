import React, { useState } from 'react'
import Metamask from '../assets/metamask.png'
import '../styles/connection.scss'
import { useMediaQuery } from "react-responsive";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../helpers/connector";
import { useWindowSize } from '../hooks/useWindowSize'
import Confetti from 'react-confetti'
import { scroller } from "react-scroll"

function Connection({setIsClicked}) {
    const [isShown, setIsShown] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const { activate } = useWeb3React();
    const isMobile = useMediaQuery({ maxWidth: 890 })

    const MetamaskConnector = async () => {
        try {
            await activate(injected);
            setShowConfetti(true)
            scrollToTop()
            setIsClicked(true)
        } catch (ex) {
            console.log(ex);
        }
    };

    const scrollToTop = () => {
        scroller.scrollTo("top", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        })
    }

    const { width, height } = useWindowSize()
    return (
        <>
            {!isShown && (
                <div style={{ paddingTop: '150px' }} className='center-simple'>
                    <div onMouseEnter={() => setIsShown(true)} className='cache'>
                        {isMobile ? <p>Click me.</p> : <p>Hover me.</p>}
                    </div>
                </div>
            )}
            {isShown && (
                <div onMouseLeave={() => setIsShown(false)} style={{ paddingTop: '150px' }} className='center-simple'>
                    <img className='metamask' src={Metamask} width={100} height={100} alt='metamask' onClick={MetamaskConnector} />
                </div>
            )}
            {showConfetti &&
                <Confetti
                    numberOfPieces={5000}
                    recycle={false}
                    width={width - 25}
                    height={height}
                    
                    tweenDuration={30000}
                     />
            }
        </>
    )
}

export default Connection