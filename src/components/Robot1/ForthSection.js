import React from 'react';
import img1 from '../../assets/images/WebSite TestMedia/IMG27.jpg';
import video1 from '../../assets/videos/slam_pc.mp4';
import img2 from '../../assets/images/Homepage Images/slam_3d.png';
import img3 from '../../assets/images/Homepage Images/slam_hjgz.png';
const ForthSection = () => {
    return (
        <>
            <div className='container'>
                <h1 className='text-center'>NEW EVOLUTION<br></br>No.1 Serving Robot</h1>
                <div className='row'>
                    <div className="col-lg-4 col-md-6">
                        <ul style={{ listStyle: 'circle', margin: '80px' }}>
                            <li style={{ padding: '20px' }}><h3>Custom Tray</h3><p>PD1 Tray 43*50cm <br></br>PD6 box type tray<br></br> 35*40cm</p></li>
                            <li style={{ padding: '20px' }}><h3>Responsive LED</h3><p>LED display according to status</p></li>
                            <li style={{ padding: '20px' }}><h3>LiDAR</h3><p>next generation radar <br></br>Efficient SLAM</p></li>
                            <li style={{ padding: '20px' }}><h3>Sound</h3><p>20W*2 high power<br></br> speaker excellent <br></br>sound effects</p></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <img className='w-50' style={{ margin: '25%' }} src={img1} />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <ul style={{ listStyle: 'circle', margin: '80px' }}>
                            <li style={{ padding: '20px' }}><h3>Custom Tray</h3><p>PD1 Tray 43*50cm <br></br>PD6 box type tray<br></br> 35*40cm</p></li>
                            <li style={{ padding: '20px' }}><h3>Responsive LED</h3><p>LED display according to status</p></li>
                            <li style={{ padding: '20px' }}><h3>LiDAR</h3><p>next generation radar <br></br>Efficient SLAM</p></li>
                            <li style={{ padding: '20px' }}><h3>Sound</h3><p>20W*2 high power<br></br> speaker excellent <br></br>sound effects</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container pt-50'>
                <div className='row'>
                    <div className="col-lg-6 col-md-6">
                        <video style={{ width: '100%' }} src={video1} autoPlay loop muted />
                    </div>
                    <div className="col-lg-6 col-md-6 pl-100 pr-100">
                        <h1>PUDU SLAM</h1><p style={{ fontSize: '24px', paddingTop:'10px'}}>PUDU SLAM is a SLAM solution based on various
                            sensors such as LiDAR, Camera, RGBD, IMU, and Encoder.
                            This solution allows robots to perform tasks efficiently
                            in a variety of environments.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 pl-100 pr-100 pt-100">
                        <h1>Environmental Awareness</h1><p style={{ fontSize: '24px' , paddingTop:'10px' }}>Safety and obstacle avoidance 
                        performance have been greatly improved through LiDAR and RGBD cameras. It can operate stably 
                        even against objects floating in the air or obstacles in blind spots.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 pt-100">
                        <img style={{ width: '100%' }} src={img3}/>
                    </div>
                    <div className="col-lg-6 col-md-6 pt-100 pb-100">
                        <img style={{ width: '100%' }} src={img2}/>
                    </div>
                    <div className="col-lg-6 col-md-6 pl-100 pr-100 pt-100">
                        <h1>3D Obstacle Avoidance</h1><p style={{ fontSize: '24px', paddingTop:'10px' }}>By adding two 3D sensors to the 
                        existing 2D radar method, the possibility of safety accidents is greatly reduced by quickly 
                        modeling the surrounding environment.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForthSection