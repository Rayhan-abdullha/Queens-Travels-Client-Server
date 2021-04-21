import { Done, RoomService, Security, Star } from '@material-ui/icons';
import React from 'react';
import whyChoose from '../../../images/whyChoose.jpg'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
    return (
        <section className="why-Choose-Us py-5">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h2>Why Choose Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae <br/> magni nulla voluptatem aliquid provident distination?</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-5 col-md-5">
                        <figure>
                            <img className="w-100" src={whyChoose} alt="imgNotFound"/>
                        </figure>
                    </div>
                    <div className="col-xl-7 col-md-7">
                        <div className="row text-center">
                            <div className="col-xl-6 col-md-6 mb-4">
                                <div className="icon">
                                    <Star/>
                                </div>
                                <h4>Handpicked Hotels</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, voluptates!</p>
                            </div>
                            <div className="col-xl-6 col-md-6 mb-4">
                                <div className="icon">
                                    <RoomService/>
                                </div>
                                <h4>World Class Service</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, voluptates!</p>
                            </div>
                            <div className="col-xl-6 col-md-6 mb-4">
                                <div className="icon">
                                    <Done/>
                                </div>
                                <h4>Best Price Guarantee</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, voluptates!</p>
                            </div>
                            <div className="col-xl-6 col-md-6 mb-4">
                                <div className="icon">
                                    <Security/>
                                </div>
                                <h4>Secure Travel</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, voluptates!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;