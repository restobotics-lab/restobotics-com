import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const EmailResponse = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('restobotics', 'template_lcu3k8o', form.current,'lEDOmEs9IeFPi1YwW')
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="col-md-8">
            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="first_name" />
                    <label>Email</label>
                    <input type="email" name="last_name" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};
