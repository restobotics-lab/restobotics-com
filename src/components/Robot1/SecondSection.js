import React from 'react'
import video1 from '../../assets/images/WebSite TestMedia/promo video 1.mp4';
const SecondSection = () => {
    return (
        <>
            <div className='container'>
                <div className="col-lg-12 col-md-8 mt-30 pt-100">
                    <div className="appie-section-title text-center">
                        <h1>Self-driving serving robot</h1>
                        <h2 className=''>PuduBot
                        </h2>
                        <video className='w-100 mt-50' autoPlay muted controls src={video1}></video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondSection