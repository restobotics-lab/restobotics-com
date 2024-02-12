import React from 'react';
import iconOne from '../../assets/images/Homepage Images/airetail_sub_01.jpg';
import iconTwo from '../../assets/images/Homepage Images/airetail_sub_02.jpg';
import iconThree from '../../assets/images/Homepage Images/airetail_sub_03.jpg';
import iconFour from '../../assets/images/Homepage Images/airetail_sub_04.jpg';

function ServicesHomeThree() {
    return (
        <>
            <section className="appie-service-area appie-service-3-area pt-195 pb-100" id="service">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Personalized and convenient customer shopping experience</h3>
                                <p>
                                    VD Company combines computer vision algorithms and sensor fusion to automate consumers' shopping journeys.
                                    We propose an innovative store that improves the efficiency of store management and provides a new ‘consumption experience’ to consumers.
                                    Start a new innovation in your store now.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div
                                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                item-5
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div>
                                    <img src={iconOne} alt="" />
                                </div>
                                <h4 className="appie-title">COMPUTER VISION</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div
                                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                item-5
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div>
                                    <img src={iconTwo} alt="" />
                                </div>
                                <h4 className="appie-title">NO WAIT</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div
                                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                item-5
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div>
                                    <img src={iconThree} alt="" />
                                </div>
                                <h4 className="appie-title">AI PAYMENT</h4>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div
                                className="
                appie-single-service appie-single-services-3
                text-center
                mt-30
                item-5
                wow
                animated
                fadeInUp
              "
                                data-wow-duration="2000ms"
                                data-wow-delay="800ms"
                            >
                                <div>
                                    <img src={iconFour} alt="" />
                                </div>
                                <h4 className="appie-title">DEEP LEARNING</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-8 mt-30">
                        <div className="appie-section-title">
                            <h5>Computer Vision</h5>
                            <p>Computer vision is a field of research that gives computers the 
                                same vision as humans and helps them find useful information by
                                 analyzing photos or videos. VD Company learns the properties of 
                                 image data through computer vision, which will lead the 4th Industrial 
                                 Revolution, and provides various programming services.
                            </p>
                            <br></br>
                            <h5>Sensor Fusion</h5>
                            <p>Sensor fusion is a technology that creates a model or image of the surrounding 
                                environment by integrating inputs from cameras, radar, lidar, and ultrasonic
                                 waves. By complementing the strengths and weaknesses of each sensor, 
                                 more accurate information can be created. 
                            </p>
                            <br></br>
                            <h5>AI</h5>
                            <p>
                            By introducing computer vision recognition technology and automatic payment solutions,
                             it becomes possible to recognize products and make payments. VD Company has solutions
                              through AI to address recent issues such as labor shortage, high labor costs, and long
                               working hours in convenience stores.
                            </p>
                            <br></br>
                            <h5>Deep learning</h5>
                            <p>
                            Objects are detected and recognized using image information obtained through multiple 
                            computer vision. It is possible to track the target's travel time and route by using 
                            metadata information such as the time and location where the information was stored, and 
                            provides a customer behavior analysis solution through learning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesHomeThree;
