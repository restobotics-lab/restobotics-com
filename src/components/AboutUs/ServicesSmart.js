import React from 'react';
import iconOne from '../../assets/images/Homepage Images/smartbox_sub_01.jpg';
import iconTwo from '../../assets/images/Homepage Images/smartbox_sub_02.jpg';
import iconThree from '../../assets/images/Homepage Images/smartbox_sub_03.jpg';
import iconFour from '../../assets/images/Homepage Images/smartbox_sub_04.jpg';
import img1 from '../../assets/images/Homepage Images/smartbox_sub03_01.jpg';
import img2 from '../../assets/images/Homepage Images/smartbox_sub03_02.jpg';
import video1 from '../../assets/videos/pose.mp4'
function ServicesHomeThree() {
    return (
        <>
            <section className="appie-service-area appie-service-3-area pt-195 pb-100" id="service">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">ABOUT UPPER</h3>
                                <p>
                                The world's best AI product recognition algorithm makes shopping as easy as
                                 grabbing a bottle of beverage from your home refrigerator.
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
                                <h4 className="appie-title">DEEP LEARNING</h4>
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
                                <h4 className="appie-title">AI ALGORITHMS</h4>
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
                                <h4 className="appie-title">LOW COST</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-8 mt-30 pt-100">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">OUR SERVICES</h3>
                            <p className=''>This is an AI vending machine that applies computer vision technology and automatic payment solutions.
                            It is easy to manage products, customers, sales, and inventory/expiration date, and can operate 24 hours a day.
                            This is a system that allows payment using an app, credit card, or employee ID card.
                            </p>
                            <video className='w-100 mt-50' loop autoPlay muted src={video1}></video>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-8 mt-30 pt-100">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">APPLICATION</h3>
                            <p className=''>Experience the beginning of a new retail world, The Pyeonbox app. 
                                Using the app, you can easily manage products, customers, sales, and inventory/expiration date.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <img className='mt-30' src={img1}/>
                        <img className='mt-30' src={img2}/>
                    </div>
                    <div className="col-lg-12 col-md-8 mt-30 pt-100">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">APPLIED STORE</h3>
                            <p className=''>The Convenience Box is already being used in various private 
                            offices, companies, hotels, study cafes, camping sites, etc.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesHomeThree;
