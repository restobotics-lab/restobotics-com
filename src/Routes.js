import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import AboutUsTwo from './components/AboutUs/AboutUsTwo';
import Contact from './components/Contact';
import Error from './components/Error';
import Loader from './components/Helper/Loader';
import ScrollToTop from './components/Helper/ScrollToTop';
import HomeDark from './components/HomeDark';
import HomeEight from './components/HomeEight';
import HomeFive from './components/HomeFive';
import HomeFour from './components/HomeFour';
import HomeOne from './components/HomeOne';
import HomeRtl from './components/HomeRtl';
import HomeSeven from './components/HomeSeven';
import HomeSix from './components/HomeSix';
import HomeThree from './components/HomeThree';
import Hometwo from './components/HomeTwo';
import News from './components/News';
import SingleNews from './components/News/SingleNews';
import Service from './components/Service';
import Shops from './components/Shops';
import ShopDetails from './components/Shops/Details';
import Robot1 from './components/Robot1';

function AppRoutes() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });
    return (
        <>
            {loading && (
                <div className={`appie-loader ${loading ? 'active' : ''}`}>
                    <Loader />
                </div>
            )}
            <div className={`appie-visible ${loading === false ? 'active' : ''}`}>
                <Router>
                    <ScrollToTop>
                        <Routes>
                            <Route exact path="/" element={<HomeSeven />} />
                            <Route exact path="/home-two" element={<Hometwo />} />
                            <Route exact path="/home-three" element={<HomeThree />} />
                            <Route exact path="/home-four" element={<HomeFour />} />
                            <Route exact path="/home-five" element={<HomeFive />} />
                            <Route exact path="/home-six" element={<HomeSix />} />
                            <Route exact path="/home-seven" element={<HomeSeven />} />
                            <Route exact path="/home-eight" element={<HomeEight />} />
                            <Route exact path="/home-dark" element={<HomeDark />} />
                            <Route exact path="/home-rtl" element={<HomeRtl />} />
                            <Route exact path="/news" element={<News />} />
                            <Route exact path="/news/single-news" element={<SingleNews />} />
                            <Route exact path="/service" element={<Service />} />
                            <Route exact path="/about-us" element={<AboutUs />} />
                            <Route exact path="/contact" element={<Contact />} />
                            <Route exact path="/error" element={<Error />} />
                            <Route exact path="/about-us-another" element={<AboutUsTwo />} />
                            <Route exact path="/shops" element={<Shops />} />
                            <Route exact path="/shops/shop-details" element={<ShopDetails />} />
                            <Route exact path="/robot1" element={<Robot1 />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </ScrollToTop>
                </Router>
            </div>
        </>
    );
}

export default AppRoutes;