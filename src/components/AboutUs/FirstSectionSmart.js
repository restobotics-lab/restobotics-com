import React from 'react'
import ai_main from '../../assets/images/Homepage Images/smartbox_01.jpg'
const FirstSectionSmart = () => {
    return (
        <>
            <div>
                <div className="appie-showcase-item pt-30">
                    <a className="appie-image-popup">
                        <img src={ai_main} alt="" />
                        <div className="ai-text-overlay">
                        <p className='text-light text-bold' style={{fontSize: '4vw', margin: '5%'}}><b>SMARTBOX</b></p>THE BEGINNING OF A NEW RETAIL WORLD</div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default FirstSectionSmart