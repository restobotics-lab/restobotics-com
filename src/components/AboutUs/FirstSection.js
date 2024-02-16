import React from 'react'
import ai_main from '../../assets/images/Homepage Images/airetail01.jpg'
const FirstSection = () => {
    return (
        <>
            <div>
                <div className="appie-showcase-item pt-70">
                    <a className="appie-image-popup">
                        <img src={ai_main} alt="" />
                        <div className="ai-text-overlay">UNMANNED STORE BASED ON AI, COMPUTER VISION, SENSOR FUSION, AND DEEP LEARNING
                        <p className='text-light text-bold' style={{fontSize: '4vw', margin: '5%'}}><b>TO THE STORES</b></p></div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default FirstSection