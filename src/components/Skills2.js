import React, { useState } from 'react'
import ReactLogo from '../assets/react.png'
import Typescript from '../assets/typescript.svg'
import Javascript from '../assets/javascript.png'
import Vue from '../assets/vue.png'
import Scss from '../assets/scss.png'
import EthersJs from '../assets/ethersjs.png'
import Web3 from '../assets/web3.png'
import Node from '../assets/node.png'
import { useMediaQuery } from "react-responsive";
import { skillsText } from '../store/constant'

function Skills2() {
    const [isShown, setIsShown] = useState(-1);

    const isMobile = useMediaQuery({ maxWidth: 890 });
    const size = isMobile ? 70 : 100;

    const showSkillText = () => {
        return (
            <>
                {isShown !== -1 ?
                    <p style={{ height: '20px' }} className='center-simple'>{skillsText[isShown]}</p>
                    : isShown === -1 && <p style={{ height: '20px' }}></p>}
            </>
        )
    }
    return (
        <div>
            <div style={{ paddingTop: '50px' }} />
            <h1 style={{ textAlign: 'center' }}>Skills</h1>
            <div className='center-simple-col'>
                <div className='center-simple'>
                    <img src={ReactLogo} alt='React' width={size} height={size} onMouseEnter={() => setIsShown(0)} onMouseLeave={() => setIsShown(-1)} />
                    <img style={{ borderRadius: '15px' }} src={Typescript} alt='Typescript' width={size} height={size} onMouseEnter={() => setIsShown(1)} onMouseLeave={() => setIsShown(-1)} />
                    <img style={{ borderRadius: '15px' }} src={Javascript} alt='Javascript' width={size} height={size} onMouseEnter={() => setIsShown(2)} onMouseLeave={() => setIsShown(-1)} />
                    <img src={Vue} alt='Vue' width={size} height={size} onMouseEnter={() => setIsShown(3)} onMouseLeave={() => setIsShown(4)} />
                </div>
                <div className='center-simple'>
                    <img style={{ borderRadius: '50%' }} src={Scss} alt='Scss' width={size} height={size} onMouseEnter={() => setIsShown(4)} onMouseLeave={() => setIsShown(-1)} />
                    <img style={{ borderRadius: '15px' }} src={EthersJs} alt='EthersJs' width={size} height={size} onMouseEnter={() => setIsShown(5)} onMouseLeave={() => setIsShown(-1)} />
                    <img src={Web3} alt='Web3' width={size} height={size} onMouseEnter={() => setIsShown(6)} onMouseLeave={() => setIsShown(-1)} />
                    <img src={Node} alt='Node' width={size} height={size} onMouseEnter={() => setIsShown(7)} onMouseLeave={() => setIsShown(-1)} />
                </div>
                {showSkillText()}
            </div>
        </div>
    )
}

export default Skills2