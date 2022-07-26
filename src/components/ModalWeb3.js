import React from 'react'
import '../styles/modal-social.scss'
import { motion } from "framer-motion"
import { ethers } from 'ethers'
import { useMediaQuery } from "react-responsive";

function ModalWeb3({ account, toggleModal, ethPrice, gasPrice, balance, transactions }) {

    const onLayerClick = () => {
        document.getElementById('layout').classList.add('disappear');

        setTimeout(() => {
            toggleModal()
        }, 300)
    }

    const isMobile = useMediaQuery({ maxWidth: 890 })
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='layout'
            onClick={onLayerClick}
            id='layout'
        >
            <div style={{ lineHeight: '0px' }} className='modal-web3 center-simple-col' onClick={(e) => e.stopPropagation()}>
                <h3>Quick Overview:</h3>
                <p style={{ marginTop: '-20px', fontSize: '0.8rem' }}>powered by etherscan api.</p>
                <div className={isMobile ? 'center-simple-col' : 'center-simple'}>
                    <p>ETH Price: <span style={{ color: '#fca311' }}>$ {ethPrice}</span></p>
                    <p>Current Gas Price: <span style={{ color: '#fca311' }}>{gasPrice} wei</span></p>
                </div>
                <div className={isMobile ? 'center-simple-col' : 'center-simple'}>
                    <a style={{ textDecoration: 'none' }} href={`https://etherscan.io/address/${account}`} rel='noopener noreferrer' target='_blank'>
                        <p>Your Wallet Balance: <span style={{ color: '#fca311' }}>{ethers.utils.formatEther(balance).substring(0, 5)} eth</span></p>
                    </a>
                </div>
                <p>Your Last Transactions:</p>
                <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', gap: 10 }}>
                    {transactions.message === 'OK' && Object.keys(transactions).length !== 0 ? (transactions?.result.reverse().slice(0, 4).map((transaction, index) => {
                        return (
                            <div key={index} style={{ paddingBottom: '10px' }}>
                                <a style={{ textDecoration: 'none' }} href={`https://etherscan.io/block/${transaction?.blockNumber}`} rel='noopener noreferrer' target='_blank'>
                                    <p style={{ color: '#fca311' }}>{transaction?.blockNumber}</p>
                                </a>
                            </div>
                        )
                    })) : (
                        <p style={{width: '300%'}}>No historical transactions on ethereum</p>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default ModalWeb3