import React from 'react'
import video1 from '../../assets/images/WebSite TestMedia/promo video 1.mp4';
const SecondSection = () => {
    return (
        <>
            <div style={{backgroundColor: '#383838'}}>
                <div className='container'>
                    <div className="col-lg-12 col-md-8 mt-30 pt-100">
                        <div className="appie-section-title text-center">
                            <h1 className='text-light'>Self-driving serving robot</h1>
                            <h2 className='text-light'>PuduBot
                            </h2>
                            <video className='w-100 mt-50' autoPlay muted controls src={video1}></video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondSection