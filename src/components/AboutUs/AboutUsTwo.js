import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupHomeEight from '../HomeEight/SignupHomeEight';
import TestimonialHomeEight from '../HomeEight/TestimonialHomeEight';
import WorkPartHomeEight from '../HomeEight/WorkPartHomeEight';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import FunFactHomeThree from '../HomeThree/FunFactHomeThree';
import ServicesSmart from '../AboutUs/ServicesSmart';
import Drawer from '../Mobile/Drawer';
import HeaderNews from '../News/HeaderNews';
import HeroNews from '../News/HeroNews';
import HeaderHomeSeven from './HeaderHomeSeven';
import FirstSectionSmart from './FirstSectionSmart';
import HeroAbout from './HeroAbout';
import Footer from '../News/Footer';
import SliderShowSmart from './SliderShowSmart';

function AboutUsTwo() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />\
            <HeaderHomeSeven/>
            <FirstSectionSmart/>
            <ServicesSmart/>
            <SliderShowSmart/>
            <Footer/>
            <BackToTop />
        </>
    );
}

export default AboutUsTwo;
