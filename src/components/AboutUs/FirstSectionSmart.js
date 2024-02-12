import React from 'react'
import ai_main from '../../assets/images/Homepage Images/smartbox_01.jpg'
const FirstSectionSmart = () => {
    return (
        <>
            <div>
                <div className="appie-showcase-item mt-30">
                    <a className="appie-image-popup">
                        <img src={ai_main} alt="" />
                        <div className="ai-text-overlay">
                        <p className='text-light display-2 text-bold'><b>SMARTBOX</b></p>THE BEGINNING OF A NEW RETAIL WORLD</div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default FirstSectionSmart