import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Destination from '../Destination/Destination';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Package from '../Package/Package';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
           <Header/>
           <Services/>
           <WhyChooseUs/>
           <Destination/>
           <Package/>
           <Testimonial/>
           <ContactUs/>
           <Footer/>
        </div>
    );
};

export default Home;