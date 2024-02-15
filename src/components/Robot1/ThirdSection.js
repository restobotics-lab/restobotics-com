import React from 'react'
import video1 from '../../assets/videos/video2.mp4'
const ThirdSection = () => {
    return (
        <>
            <div className='container'>
                <div className="col-lg-12 col-md-8 mt-30 pt-100">
                    <div className="appie-section-title text-center">
                        <h1 className=''>Obstacle Recognition</h1>
                        <p className=''>The innovative 3D obstacle avoidance solution in collaboration with Intel enables fast obstacle recognition and safe driving.
                        </p>
                        <video className='w-100 mt-50' autoPlay muted loop src={video1}></video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdSection