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
                </div>
            </section>
        </>
    );
}

export default ServicesHomeThree;
