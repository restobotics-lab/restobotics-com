import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
function Forms() {
    const form = useRef();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('restobotics', 'template_lcu3k8o', form.current, 'lEDOmEs9IeFPi1YwW')
            .then(
                () => {
                    console.log('SUCCESS!');
                    setFormSubmitted(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <section className="contact-section mt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact--info-area">
                                <h3>Get in touch</h3>
                                <p>Looking for help? Fill the form and start a new adventure.</p>
                                <div className="single-info">
                                    <h5>Headquaters</h5>
                                    <p>
                                        <i className="fal fa-home"></i>
                                        744 New York Ave, Brooklyn, Kings,
                                        <br /> New York 10224
                                    </p>
                                </div>
                                <div className="single-info">
                                    <h5>Phone</h5>
                                    <p>
                                        <i className="fal fa-phone"></i>
                                        (+642) 245 356 432
                                        <br />
                                        (+420) 336 476 328
                                    </p>
                                </div>
                                <div className="single-info">
                                    <h5>Support</h5>
                                    <p>
                                        <i className="fal fa-envelope"></i>
                                        bisy@support.com
                                        <br />
                                        help@education.com
                                    </p>
                                </div>
                                <div className="ab-social">
                                    <h5>Follow Us</h5>
                                    <a className="fac" href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="twi" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="you" href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a className="lin" href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            {!formSubmitted ? (
                                <div className="contact-form">
                                    <h4>Let’s Connect</h4>
                                    <p>For business related information or support please contact us</p>
                                    <form ref={form} onSubmit={sendEmail} className="row">
                                        <div className="col-md-6">
                                            <input type="text" name="first_name" placeholder="First Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="last_name" placeholder="Last Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="number"
                                                name="phone_no"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <input type="text" name="subject" placeholder="Subject" />
                                        </div>
                                        <div className="col-md-12">
                                            <textarea
                                                name="message"
                                                placeholder="How can we help?"
                                            ></textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="condition-check">
                                                <input id="terms-conditions" type="checkbox" />
                                                <label htmlFor="terms-conditions">
                                                    I agree to the <a href="#">Terms & Conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <input type="submit" name="submit" value="Send Message" />
                                        </div>
                                    </form>
                                </div>
                            ) : (
                                <div className="contact-form">
                                    <div className="confirmation-message">
                                        <h3>Thank you for reaching out to us!</h3>
                                        <p>We will get back to you as soon as possible.</p>
                                    </div>
                                </div>
                            )}

                        </div>

                    </div>
                </div>
            </section>

            <div className="bisylms-map">
                <iframe
                    title="map"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kent%20state%20University+(RestoBotics)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

                </iframe>
            </div>
        </>
    );
}

export default Forms;
