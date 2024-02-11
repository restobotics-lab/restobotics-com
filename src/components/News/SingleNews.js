import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import Blog from './Blog';
import BlogSideBar from './BlogSideBar';
import HeaderNews from './HeaderNews';
import Footer from './Footer';
import NewsTemplate from './NewsTemplate';

function SingleNews() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews action={drawerAction.toggle} />
            {/* <HeroNews
                title="Blog"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/news', title: 'Blogs' },
                    { link: '/news/single-news', title: 'Blog' },
                ]}
            /> */}
            <section className="blogpage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <NewsTemplate />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            <BackToTop />
        </>
    );
}

export default SingleNews;
