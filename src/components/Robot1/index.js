import React from 'react';
import useToggle from '../../Hooks/useToggle';
import Drawer from '../Mobile/Drawer';
import HeaderHomeSeven from './HeaderHomeSeven';
import Footer from './Footer';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import ForthSection from './ForthSection';
import FifthSection from './FifthSection';

function Robot1() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeSeven action={drawerAction.toggle} />
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <ForthSection/>
            {/* <FifthSection/> */}
            <Footer/>
        </>
    );
}

export default Robot1;
