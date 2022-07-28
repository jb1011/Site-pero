import React from 'react'
import '../styles/skills.scss'
import { InView } from 'react-intersection-observer'

function Skills() {

  const triggerAnim = (inView) => {
    inView ? document.getElementById('html').classList.add("circle-html") : document.getElementById('html').classList.add(undefined)
    inView ? document.getElementById('scss').classList.add("circle-scss") : document.getElementById('scss').classList.add(undefined)
    inView ? document.getElementById('js').classList.add("circle-js") : document.getElementById('js').classList.add(undefined)
    inView ? document.getElementById('ts').classList.add("circle-ts") : document.getElementById('ts').classList.add(undefined)
    inView ? document.getElementById('node').classList.add("circle-node") : document.getElementById('node').classList.add(undefined)
    inView ? document.getElementById('ethersjs').classList.add("circle-EthersJs") : document.getElementById('ethersjs').classList.add(undefined)
    inView ? document.getElementById('web3').classList.add("circle-Web3") : document.getElementById('web3').classList.add(undefined)
    inView ? document.getElementById('c').classList.add("circle-C") : document.getElementById('c').classList.add(undefined)
    inView ? document.getElementById('react').classList.add("circle-react") : document.getElementById('react').classList.add(undefined)
    inView ? document.getElementById('vue').classList.add("circle-vue") : document.getElementById('vue').classList.add(undefined)

  }

  return (
    <>
      <div style={{ paddingTop: '50px' }} />
      <h1 style={{ textAlign: 'center' }}>Skills</h1>
      <InView as='div' onChange={(inView) => triggerAnim(inView)}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{fontFamily: 'light'}} className='container__progressbars'>
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle id='react' cx="80" cy="80" r="70" className="progressbar__svg-circle shadow-html"> </circle>
              </svg>
              <span className="progressbar__text shadow-html">REACT</span>
            </div>
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle id='vue' cx="80" cy="80" r="70" className="progressbar__svg-circle shadow-html"> </circle>
              </svg>
              <span className="progressbar__text shadow-html">VUE</span>
            </div>
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle id='html' cx="80" cy="80" r="70" className="progressbar__svg-circle shadow-html"> </circle>
              </svg>
              <span className="progressbar__text shadow-html">HTML</span>
            </div>
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle id='scss' cx="80" cy="80" r="70" className="progressbar__svg-circle shadow-html"> </circle>
              </svg>
              <span className="progressbar__text shadow-html">SCSS</span>
            </div>
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle id='js' cx="80" cy="80" r="70" className="progressbar__svg-circle shadow-html"> </circle>
              </svg>
              <span className="progressbar__text shadow-html">JAVASCRIPT</span>
            </div>
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle id='ts' cx="80" cy="80" r="70" className="progressbar__svg-circle shadow-html"> </circle>
              </svg>
              <span className="progressbar__text shadow-html">TYPESCRIPT</span>
            </div>
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle id='node' cx="80" cy="80" r="70" className="progressbar__svg-circle shadow-html"> </circle>
              </svg>
              <span className="progressbar__text shadow-html">NODE</span>
            </div>
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle id='ethersjs' cx="80" cy="80" r="70" className="progressbar__svg-circle shadow-html"> </circle>
              </svg>
              <span style={{textAlign: 'center'}} className="progressbar__text shadow-html">ETHERS-JS</span>
            </div>
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle id='web3' cx="80" cy="80" r="70" className="progressbar__svg-circle shadow-html"> </circle>
              </svg>
              <span className="progressbar__text shadow-html">WEB3</span>
            </div>
            <div className="progressbar">
              <svg className="progressbar__svg">
                <circle id='c' cx="80" cy="80" r="70" className="progressbar__svg-circle shadow-html"> </circle>
              </svg>
              <span className="progressbar__text shadow-html">C</span>
            </div>
          </div>
        </div>
      </InView>
    </>
  )
}

export default Skills