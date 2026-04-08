import grok from '../assets/images/grokLogo.svg'
import microphone from '../assets/images/microphone.svg'
import paperClip from '../assets/images/paperClip.svg'
import upArrow from '../assets/images/upArrow.svg'
import AutoModal from './AutoOptions'
import { useState } from 'react'

export default function ChatInterface() {
    const [show, setShow] = useState(false)


    return (
        <div className="chatInterface">
            <img className='grokmd' src={grok} alt="" />
            <div className="search-cont">
                <div className='paperClip-Btn'><img src={paperClip} alt="paperClip" /></div>
                <textarea type="text" placeholder='Ask Grok'/>
                <div className='search-bt'>
                    <button  onClick={()=>(setShow(prev => !prev))} className='btn'><span style={{fontWeight: '700'}}>Auto</span><span style={{display:'flex', alignItems:'center' }}>
                    <img className={`arrow ${show ? 'up': ''}`} src={upArrow} alt="up arrow"/></span></button>
                    <AutoModal show={show}/>
                    <button className='btn mic'><img src={microphone} alt="microphone" /></button>
                    <div className="audio-btn">
                            <div className="bar" style={{height: '0.4rem'}}></div>
                            <div className="bar" style={{height: '0.8rem'}}></div>
                            <div className="bar" style={{height: '1.2rem'}}></div>
                            <div className="bar" style={{height: '0.7rem'}}></div>
                            <div className="bar" style={{height: '1rem'}}></div>
                            <div className="bar" style={{height: '0.4rem'}}></div>
                    </div>
                </div>
            </div>
            <div className='search-last'><span className='search-sp'><img src={microphone} alt="mic" /><span className='search-sp sp-bold' style={{fontWeight: 'bold'}}>New</span>· Hold Ctrl+D to dictate</span></div>
        </div>
    )
}