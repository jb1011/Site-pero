import React from 'react'
import '../styles/skills.scss'
import { InView } from 'react-intersection-observer'

function Skills() {

  const triggerAnim = (inView) => {
    inView ? document.getElementById('html').classList.add("circle-html") : document.getElementById('html').classList.add("")
    inView ? document.getElementById('scss').classList.add("circle-scss") : document.getElementById('scss').classList.add("")
    inView ? document.getElementById('js').classList.add("circle-js") : document.getElementById('js').classList.add("")
    inView ? document.getElementById('ts').classList.add("circle-ts") : document.getElementById('ts').classList.add("")
    inView ? document.getElementById('node').classList.add("circle-node") : document.getElementById('node').classList.add("")
    inView ? document.getElementById('ethersjs').classList.add("circle-EthersJs") : document.getElementById('ethersjs').classList.add("")
    inView ? document.getElementById('web3').classList.add("circle-Web3") : document.getElementById('web3').classList.add("")
    inView ? document.getElementById('c').classList.add("circle-C") : document.getElementById('c').classList.add("")
  }

  return (
    <>
      <div style={{ paddingTop: '150px' }} />
      <h1 style={{ textAlign: 'center' }}>Skills</h1>
      <InView as='div' onChange={(inView) => triggerAnim(inView)}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='container__progressbars'>
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
              <span className="progressbar__text shadow-html">EthersJs</span>
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