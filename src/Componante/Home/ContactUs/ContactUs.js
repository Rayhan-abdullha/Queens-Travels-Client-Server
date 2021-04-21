import { Flag } from '@material-ui/icons';
import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <section className="contact-us py-5">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae <br/> magni nulla voluptatem aliquid provident distination?</p>
                </div>
                <div className="row text-center">
                    <div className="col-xl-4">
                        <div className="icon">
                            <Flag/>
                        </div>
                        <div className="contact-text">
                            <p>2369 Robinson Lane
                                <br/>Jackson, OH 45640
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="icon">
                            <Flag/>
                        </div>
                        <div className="contact-text">
                            <p>(+1) 740-395-3829
                                <br/>(+1) 740-395-3829
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="icon">
                            <Flag/>
                        </div>
                        <div className="contact-text">
                            <p>Info@example.com
                                <br/>admin@example.com
                            </p>
                        </div>
                    </div>
                    <div className="contact-from w-100 mt-5">
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="name" placeholder="Enter Your Name"/>
                        </div>
                        <div class="mb-3"> 
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Your Email" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <textarea type="text" class="form-control" id="message" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;