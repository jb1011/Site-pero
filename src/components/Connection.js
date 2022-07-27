import React, { useEffect, useState } from 'react'
import Metamask from '../assets/metamask.png'
import '../styles/connection.scss'
import { useMediaQuery } from "react-responsive";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../helpers/connector";
import { useWindowSize } from '../hooks/useWindowSize'
import Confetti from 'react-confetti'
import { scroller } from "react-scroll"

function Connection() {
    const [isShown, setIsShown] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [hasNotMetamask, setHasNotMetamask] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const { activate, account } = useWeb3React();
    const isMobile = useMediaQuery({ maxWidth: 890 })

    const MetamaskConnector = async () => {
        try {
            await activate(injected);
            setIsClicked(true)
        } catch (ex) {
            console.log(ex);
        }
    };

    useEffect(() => {
        const isAccount = () => {
            if (isClicked) {
                if (account) {
                    setShowConfetti(true)
                    scrollToTop()
                }
                else {
                    setShowConfetti(false)
                    setHasNotMetamask(true)
                }
            }
        }
        isAccount()
    }, [account, isClicked])

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
                <div onMouseLeave={() => setIsShown(false)} style={{ paddingTop: '150px' }} className='center-simple-col metamask' onClick={MetamaskConnector}>
                    <img src={Metamask} width={100} height={100} alt='metamask' />
                    <p>Connect with metamask.</p>
                </div>
            )}
            {
                hasNotMetamask &&
                <div className='center-simple'>
                    <p style={{ color: 'red' }}>Install metamask on your browser</p>
                </div>
            }
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