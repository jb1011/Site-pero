import React, { useState, useEffect } from 'react'
import '../styles/hero.scss'
import ModalWeb3 from './ModalWeb3'
import { useWeb3React } from "@web3-react/core";
import axios from 'axios'
import { useMediaQuery } from "react-responsive";

const API_KEY = `M4ARD2Z4QDNPQU5W2ASZY9ASIH74CFYPUY`

function Hero() {
    const [modal, setModal] = useState(false)
    const [ethPrice, setEthPrice] = useState({})
    const [gasPrice, setGasPrice] = useState({})
    const [balance, setBalance] = useState({})
    const [transactions, setTransactions] = useState([])
    const { account } = useWeb3React();
    const isMobile = useMediaQuery({ maxWidth: 890 })

    const toggleModal = () => {
        setModal(!modal)
    }

    useEffect(() => {
        axios.get(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_KEY}`)
            .then(res => {
                setEthPrice(res.data)
            })
    }, [account])

    useEffect(() => {
        axios.get(`https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${API_KEY}`)
            .then(res => {
                setGasPrice(res.data)
            })
    }, [account])

    useEffect(() => {
        axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${account}&tag=latest&apikey=${API_KEY}`)
            .then(res => {
                setBalance(res.data)
            })
    }, [account])

    useEffect(() => {
        axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${account}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}`)
            .then(res => {
                setTransactions(res.data)
            })
    }, [account])
    return (
        <>
            {modal && <ModalWeb3 toggleModal={toggleModal} account={account} ethPrice={ethPrice.result?.ethusd} gasPrice={gasPrice?.result} balance={balance?.result} transactions={transactions} />}
            <div className='center-page-col'>
                <div className='sun'>
                    <div className={isMobile ? 'text-circle-sm' : 'text-circle'}>
                        {account ? (<>
                            <h1 style={{ cursor: 'pointer' }} onClick={() => setModal(!modal)}>Click here.</h1>
                        </>
                        ) : (
                            <>
                                {isMobile ? (
                                    <>
                                        <h3>Jean-Baptiste Demenet</h3>
                                            <p style={{ fontFamily: 'Lobster Two'}}>Front-end developer.</p>
                                    </>
                                ) : (
                                    <>
                                        <h1>Jean-Baptiste Demenet</h1>
                                        <h3>Front-end developer.</h3>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero