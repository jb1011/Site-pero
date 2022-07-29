import React from 'react'
import ReactLogo from '../assets/react.png'
import Typescript from '../assets/typescript.svg'
import Javascript from '../assets/javascript.png'
import Vue from '../assets/vue.png'
import Scss from '../assets/scss.png'
import EthersJs from '../assets/ethersjs.png'
import Web3 from '../assets/web3.png'
import Node from '../assets/node.png'
import { useMediaQuery } from "react-responsive";

function Skills2() {

    const isMobile = useMediaQuery({ maxWidth: 890 })
    return (
        <div>
            <div style={{ paddingTop: '50px' }} />
            <h1 style={{ textAlign: 'center' }}>Skills</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
                <img src={ReactLogo} alt='React' width={100} height={100} />
                <img style={{ borderRadius: '15px' }} src={Typescript} alt='React' width={100} height={100} />
                <img style={{ borderRadius: '15px' }} src={Javascript} alt='React' width={100} height={100} />
                <img src={Vue} alt='React' width={100} height={100} />
                <img style={{ borderRadius: '50%' }} src={Scss} alt='React' width={100} height={100} />
                <img style={{ borderRadius: '15px' }} src={EthersJs} alt='React' width={100} height={100} />
                <img src={Web3} alt='React' width={100} height={100} />
                <img src={Node} alt='React' width={100} height={100} />
            </div>
        </div>
    )
}

export default Skills2