import React from 'react';
import thumb4 from '../../assets/images/about-thumb-4.png';
import thumb5 from '../../assets/images/about-thumb-5.png';

function AboutHomeEight() {
    return (
        <>
            <section className="appie-about-8-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title mb-30">
                                <h3 className="appie-title">
                                    We bring everything <br />
                                    that's required to build automated restaurant
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="appie-about-8-box">
                                <h3 className="title">
                                    One to One customize<br />
                                    your delivery robot
                                </h3>
                                <p>
                                    Configure the delivery robot according to your restaurant's layout, <br />
                                    provide guidance on installation and operational procedures.
                                </p>
                                {/* <a className="main-btn" href="#">
                                    Learn More <i className="fal fa-arrow-right" />
                                </a> */}
                                <div className="thumb">
                                    <img src={thumb5} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="appie-about-8-box">
                                <h3 className="title">
                                    End to End solution<br />
                                    restaurant system
                                </h3>
                                <p>
                                    Offer a complete package encompassing systems, <br />
                                    including ordering, cashier system, administrative panels, and more.
                                </p>
                                {/* <a className="main-btn" href="#">
                                    Learn More <i className="fal fa-arrow-right" />
                                </a> */}
                                <div className="thumb mr-30">
                                    <img src={thumb5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutHomeEight;
