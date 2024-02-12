import React from 'react'
import ai_main from '../../assets/images/Homepage Images/airetail01.jpg'
const FirstSection = () => {
    return (
        <>
            <div>
                <div className="appie-showcase-item mt-30">
                    <a className="appie-image-popup">
                        <img src={ai_main} alt="" />
                        <div className="ai-text-overlay">UNMANNED STORE BASED ON AI, COMPUTER VISION, SENSOR FUSION, AND DEEP LEARNING
                        <p className='text-light display-2 text-bold'><b>TO THE STORES</b></p></div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default FirstSection