import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Homepage Images/logo.png';


function Footer({ className }) {
    return (
        <>
            <section className={`appie-footer-area ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget">
                                <div className="logo">
                                    <a href="#">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                                <p className='text-light'>
                                Serve Up Success: Total Restaurant Solutions.
                                </p>
                                <div className="social mt-30">
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
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title text-light">Company</h4>
                                <ul>
                                    <li>
                                        <Link className='text-light' to="/robot1">Robot 1</Link>
                                    </li>
                                    <li>
                                        <Link className='text-light' to="/robot1">Robot 2</Link>
                                    </li>
                                    <li>
                                        <Link className='text-light' to="/about-us">AI Store</Link>
                                    </li>
                                    <li>
                                        <Link className='text-light' to="/about-us-another">Smart Store</Link>
                                    </li>
                                    <li>
                                        <Link className='text-light' to="/news">News</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* <div className="footer-navigation">
                                <h4 className="title text-light">Support</h4>
                                <ul>
                                    <li>
                                        <Link className='text-light' to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <a className='text-light' href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a className='text-light' href="#">Careers</a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-info">
                                <h4 className="title text-light">Get In Touch</h4>
                                <ul>
                                    <li>
                                        <Link to="/contact">
                                            <i className="fal fa-envelope text-light" /> <div className='text-light'>shawnlin@restobostics.com</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-phone text-light" /> <div className='text-light'>2342056382</div> 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-map-marker-alt text-light" /> <div className='text-light'>800 E Summit St, Kent, OH 44240</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright d-flex align-items-center justify-content-between pt-35 ">
                                {/* <div className="apps-download-btn">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-apple" /> Download for iOS
                                            </a>
                                        </li>
                                        <li>
                                            <a className="item-2" href="#">
                                                <i className="fab fa-google-play" /> Download for
                                                Android
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                                <div className="copyright-text ">
                                    <p className='text-light'>Copyright © 2024 RestoBotics. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
