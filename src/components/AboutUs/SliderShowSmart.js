import React, { useRef } from 'react';
import Slider from 'react-slick';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import shape12 from '../../assets/images/shape/shape-12.png';
import shape13 from '../../assets/images/shape/shape-13.png';
import shape14 from '../../assets/images/shape/shape-14.png';
import shape15 from '../../assets/images/shape/shape-15.png';
import main4 from '../../assets/images/Homepage Images/smartbox_sub2_01_crop.jpg'
import main3 from '../../assets/images/Homepage Images/smartbox_sub2_02_crop.jpg'
import main2 from '../../assets/images/Homepage Images/smartbox_sub2_03_crop.jpg'
import main1 from '../../assets/images/Homepage Images/smartbox_sub2_04_crop.jpg'
function SliderShowSmart() {
    const sliderRef = useRef();
    // const sliderNext = () => {
    //     sliderRef.current.slickNext();
    // };
    // const sliderPrev = () => {
    //     sliderRef.current.slickPrev();
    // };
    const settings = {
        autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <section className="appie-hero-area-smart">

                <div className='container'>
                    <div style={{ width: '100%', margin: '0 auto' }}>
                        <div className="row appie-showcase-slider">
                            <div className="col-lg-12">
                                <Slider ref={sliderRef} {...settings}>
                                    <div>
                                        <div className="appie-showcase-item mt-30">
                                            <a className="appie-image-popup">
                                                <img src={main4} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="appie-showcase-item mt-30">
                                            <a className="appie-image-popup">
                                                <img src={main3} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="appie-showcase-item mt-30">
                                            <a className="appie-image-popup">
                                                <img src={main2} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="appie-showcase-item mt-30">
                                            <a className="appie-image-popup">
                                                <img src={main1} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}

export default SliderShowSmart;
