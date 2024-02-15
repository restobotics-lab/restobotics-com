import React from 'react'
import image1 from '../../assets/images/Homepage Images/robot1.png'
import HeroDot from '../../assets/images/hero-dot.png';
import heroThumb from '../../assets/images/hero-thumb-5.png';
import shape from '../../assets/images/shape/shape-10.png';

const FirstSection = () => {
    return (
        <>
            <section className="appie-hero-area appie-hero-4-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="appie-hero-content appie-hero-content-4">
                                <h1 className="appie-title">PuduBot</h1>
                                <p>
                                Self-driving serving robot
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="appie-hero-thumb appie-hero-thumb-4">
                                <img src={image1} alt="" />
                                <div className="hero-dot">
                                    <img src={HeroDot} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape-1">
                    <img src={shape} alt="" />
                </div>
            </section>
        </>
    )
}

export default FirstSection