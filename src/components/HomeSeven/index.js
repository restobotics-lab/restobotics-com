import React from 'react';
import useToggle from '../../Hooks/useToggle';
import Drawer from '../Mobile/Drawer';
import HeaderHomeSeven from './HeaderHomeSeven';
import ShowCaseHomeSeven from './ShowCaseHomeSeven';
import SecondSection from './SecondSection';
import RobotFeature from './RobotFeature';
import Lineup from './Lineup';
import Sponser from './Sponser';
import TeamMember from './TeamMember';
import Footer from './Footer';
import SliderShow from './SliderShow';
import BackToTop from '../BackToTop';

function HomeSeven() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeSeven action={drawerAction.toggle} />
            {/* <HeroHomeSeven/> */}
            {/* <ShowCaseHomeSeven/> */}
            <SliderShow/>
            <SecondSection/>
            <RobotFeature/>
            <Lineup/>
            {/* <CounterArea />
            <DownloadHomeTwo className="mb-0" /> */}
            <TeamMember />
            {/* <PricingHomeTwo />
            <FaqHomeOne className="pt-90" />
            <BlogHomeOne />
            <ProjectHomeOne /> */}\
            <Sponser/>
            <Footer/>
            <BackToTop />
        </>
    );
}

export default HomeSeven;
