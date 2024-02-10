import React from 'react';
import blogImg1 from '../../assets/images/Homepage Images/news (1).png';
import blogImg2 from '../../assets/images/Homepage Images/news (2).png';
import blogImg3 from '../../assets/images/Homepage Images/news (3).png';
import blogImg4 from '../../assets/images/Homepage Images/news (4).png';
import blogImg5 from '../../assets/images/Homepage Images/news (5).png';
import blogImg6 from '../../assets/images/Homepage Images/news (6).png';
import blogImg7 from '../../assets/images/Homepage Images/news (7).png';
import blogImg8 from '../../assets/images/Homepage Images/news (8).png';

function Blogs() {
    return (
        <>
            <div className="row">
                <div className="col-lg-4">
                    <div className="post-item-1">
                        <img src={blogImg1} alt="" />
                        <div className="b-post-details">
                            <div className="bp-meta">
                                <a href="#">
                                    <i className="fal fa-clock"></i>September 21, 2023
                                </a>
                                {/* <a href="#">
                                    <i className="fal fa-comments"></i>6 Comments
                                </a> */}
                            </div>
                            <h3>
                                <a href="/news/single-news">
                                VD Company and Kwangwoon University establish an industry-academia 
                                cooperation platform to foster the robot industry.
                                </a>
                            </h3>
                            <a className="read-more" href="single-post.html">
                                Read More<i className="fal fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="post-item-1">
                        <img src={blogImg2} alt="" />
                        <div className="b-post-details">
                            <div className="bp-meta">
                                <a href="#">
                                    <i className="fal fa-clock"></i>September 12, 2023
                                </a>
                                {/* <a href="#">
                                    <i className="fal fa-comments"></i>6 Comments
                                </a> */}
                            </div>
                            <h3>
                                <a href="/news/single-news">
                                VD Company selected as 'Advanced Restaurant Industry Automation Solution Company' 
                                by the Korean Food Promotion Agency's Overseas Korean Restaurant Council Workshop.
                                </a>
                            </h3>
                            <a className="read-more" href="/news/single-news">
                                Read More<i className="fal fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="post-item-1">
                        <img src={blogImg3} alt="" />
                        <div className="b-post-details">
                            <div className="bp-meta">
                                <a href="#">
                                    <i className="fal fa-clock"></i>September 05, 2023
                                </a>
                                {/* <a href="#">
                                    <i className="fal fa-comments"></i>6 Comments
                                </a> */}
                            </div>
                            <h3>
                                <a href="/news/single-news">
                                VD Company holds the largest-ever promotion ‘Robot Festival’ 
                                to celebrate reaching 10,000 VD members.
                                </a>
                            </h3>
                            <a className="read-more" href="/news/single-news">
                                Read More<i className="fal fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="post-item-1">
                        <img src={blogImg4} alt="" />
                        <div className="b-post-details">
                            <div className="bp-meta">
                                <a href="#">
                                    <i className="fal fa-clock"></i>August 22, 2023
                                </a>
                                {/* <a href="#">
                                    <i className="fal fa-comments"></i>6 Comments
                                </a> */}
                            </div>
                            <h3>
                                <a href="/news/single-news">Announcement of share certificate submission 
                                due to stock split.</a>
                            </h3>
                            <a className="read-more" href="/news/single-news">
                                Read More<i className="fal fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="post-item-1">
                        <img src={blogImg5} alt="" />
                        <div className="b-post-details">
                            <div className="bp-meta">
                                <a href="#">
                                    <i className="fal fa-clock"></i>August 22, 2023
                                </a>
                                {/* <a href="#">
                                    <i className="fal fa-comments"></i>6 Comments
                                </a> */}
                            </div>
                            <h3>
                                <a href="single-post.html">
                                VD Company ranked first among ‘Best Medium-sized and Small Businesses to Work for 
                                in the First Half of 2023’.
                                </a>
                            </h3>
                            <a className="read-more" href="single-post.html">
                                Read More<i className="fal fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="post-item-1">
                        <img src={blogImg6} alt="" />
                        <div className="b-post-details">
                            <div className="bp-meta">
                                <a href="#">
                                    <i className="fal fa-clock"></i>August 19, 2023
                                </a>
                                {/* <a href="#">
                                    <i className="fal fa-comments"></i>6 Comments
                                </a> */}
                            </div>
                            <h3>
                                <a href="/news/single-news">
                                MBN's restaurant start-up survival program 'Birth of a CEO - Open War', 
                                an emerging entertainment powerhouse... Fierce mission war for 
                                100 million won in start-up support.
                                </a>
                            </h3>
                            <a className="read-more" href="single-post.html">
                                Read More<i className="fal fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="post-item-1">
                        <img src={blogImg7} alt="" />
                        <div className="b-post-details">
                            <div className="bp-meta">
                                <a href="#">
                                    <i className="fal fa-clock"></i>August 16, 2023
                                </a>
                                {/* <a href="#">
                                    <i className="fal fa-comments"></i>6 Comments
                                </a> */}
                            </div>
                            <h3>
                                <a href="single-post.html">MBN's restaurant startup survival program 'Birth of the CEO -
                                 Open War', emerging local entertainment powerhouse... 2nd round spell war mission 
                                 showdown close match.</a>
                            </h3>
                            <a className="read-more" href="single-post.html">
                                Read More<i className="fal fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="post-item-1">
                        <img src={blogImg8} alt="" />
                        <div className="b-post-details">
                            <div className="bp-meta">
                                <a href="#">
                                    <i className="fal fa-clock"></i>August 10, 2023
                                </a>
                                {/* <a href="#">
                                    <i className="fal fa-comments"></i>6 Comments
                                </a> */}
                            </div>
                            <h3>
                                <a href="single-post.html">VD Company opens ‘Inreaching Center’, a smart logistics center 
                                dedicated to serving robots.</a>
                            </h3>
                            <a className="read-more" href="single-post.html">
                                Read More<i className="fal fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="bisylms-pagination">
                        <span className="current">01</span>
                        <a href="#">02</a>
                        <a className="next" href="#">
                            next<i className="fal fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogs;
