import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import SignupHomeEight from '../HomeEight/SignupHomeEight';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import SponserHomeTwo from '../HomeTwo/SponserHomeTwo';
import Drawer from '../Mobile/Drawer';
import HeaderAbout from './HeaderAbout';
import HeroAbout from './HeroAbout';
import ServicesAbout from './ServicesAbout';
import TeamAbout from './TeamAbout';
import HeaderHomeSeven from './HeaderHomeSeven';
import Footer from '../News/Footer';
import FirstSection from './FirstSection';
import ServicesHomeThree from './ServicesHomeThree';

function AboutUs() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeSeven action={drawerAction.toggle}/>
            <FirstSection/>
            <ServicesHomeThree/>
            <ServicesAbout />
            <Footer/>
            <BackToTop />
        </>
    );
}

export default AboutUs;
