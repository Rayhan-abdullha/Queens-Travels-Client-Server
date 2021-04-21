import React from 'react';
import './Footer.css'
import trips from '../../../images/package1.jpg'
import trips2 from '../../../images/package2.jpg'
import { Facebook, LinkedIn, Twitter, YouTube } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="pt-5">
            <div className="container">
                <div className="row text-white pb-4">
                    <div className="col-xl-4 col-md-4 mb-4">
                        <ul className="footerLogo">
                            <li>Queens Travels</li>
                            <div className="social-icon mt-3">
                                <li>
                                    <Link>
                                        <Facebook/>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <Twitter/>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <LinkedIn/>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <YouTube/>
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-4">
                        <h3>Our Awards</h3>
                        <p className="mt-3">London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-4">
                        <h3>Recent Trips</h3>
                        <div className="recent-trips mt-4">
                            <img src={trips} alt="notFound"/>           
                            <img src={trips2} alt="notFound"/>      
                            <img src={trips} alt="notFound"/>
                         </div>
                    </div>
                </div>
                <p className="text-center text-white pb-5">Copyrigth all reserved by Queens Travels</p>
            </div>
        </footer>
    );
};

export default Footer;