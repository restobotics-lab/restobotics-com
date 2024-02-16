import React from 'react';
import teamOne from '../../assets/images/team-1.jpg';
import teamTwo from '../../assets/images/team-2.jpg';
import teamThree from '../../assets/images/team-3.jpg';
import teamFour from '../../assets/images/team-4.jpg';
import kim from '../../assets/images/Homepage Images/Dr-Jong-Hoon-Kim.jpg';
import shawn from '../../assets/images/Homepage Images/Shawn.jpg';
import nafiul from '../../assets/images/Homepage Images/nafiul.jpg';

function TeamMember({ className }) {
    return (
        <>
            <section className={`appie-team-area pt-90 pb-100 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Meet our Founders</h3>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-4 col-md-6" style={{margin: 'auto'}}>
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="thumb">
                                    <img src={kim} alt="" />
                                    <ul>
                                        <li>
                                            <a href="https://www.linkedin.com/in/hoonywiz/">
                                                <i className="fab fa-linkedin" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://scholar.google.com/citations?user=fsH0h1EAAAAJ&hl=en">
                                                <i className="fab fa-google" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">Dr. Jong-Hoon Kim</h5>
                                    <span>CEO-Founder</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="thumb">
                                    <img src={shawn} alt="" />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">Xiangxu Lin</h5>
                                    <span>CEO-Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="thumb">
                                    <img src={nafiul} alt="" />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">Nafiul Alam</h5>
                                    <span>Software Engineer & Developer</span>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="800ms"
                            >
                                <div className="thumb">
                                    <img src={teamFour} alt="" />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">Benjamin Evalent</h5>
                                    <span>CEO-Founder</span>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-12">
                            <div className="team-btn text-center mt-50">
                                <a className="main-btn" href="#">
                                    {' '}
                                    View all Members <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamMember;
