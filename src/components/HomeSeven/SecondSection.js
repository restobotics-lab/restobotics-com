import React from 'react';
import HeroDot from '../../assets/images/hero-dot.png';
import heroThumb from '../../assets/images/hero-thumb-5.png';
import shape from '../../assets/images/shape/shape-10.png';
import kim from '../../assets/images/Jong-Hoon_Kim_3x4-768x1024.jpg'
function SecondSection() {
    return (
        <>
            <section className="appie-hero-area appie-hero-4-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="appie-hero-content appie-hero-content-4">
                                <h1 className="appie-title">CEO & Founder</h1>
                                <h1>Serve Up Success: Total Restaurant Solutions</h1>
                                <p>
                                We offers comprehensive and fully automated delivery services for restaurants, 
                                aiming to enhance efficiency and success in the food industry.
                                </p>
                                <a className="main-btn" href="#">
                                    Let’s Talk
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="appie-hero-thumb appie-hero-thumb-4">
                                <img src={kim} alt="" />
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
    );
}

export default SecondSection;
