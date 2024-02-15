import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import Blogs from './Blogs';
import BlogSideBar from './BlogSideBar';
import HeaderNews from './HeaderNews';
import HeroNews from './HeroNews';
import Footer from './Footer';

function News() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews action={drawerAction.toggle} />
            <section className="blogpage-section mt-30">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <Blogs />
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <BlogSideBar />
                        </div>
                    </div> */}
                    <Blogs />
                </div>
            </section>
            <Footer/>
            <BackToTop />
        </>
    );
}

export default News;
