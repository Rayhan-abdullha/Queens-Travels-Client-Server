import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceDtls from '../ServiceDtls/ServiceDtls';
import './Services.css'

const Services = () => {
    const [service, setService] = useState([]) 
    useEffect(() =>{
        fetch('https://shielded-journey-91974.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setService(data))
        
    },[])
    return (
        <div className="services-area pt-5 pb-3">
           <div className="container">
                <div className="section-title text-center mb-5">
                    <h2>Queens Travels Sevices</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae <br/> magni nulla voluptatem aliquid provident distination?</p>
                </div>
                <div className="row text-center">
                    {
                        service.map(pd => <ServiceDtls services={pd}></ServiceDtls>)
                    }
                </div>
           </div>
        </div>
    );
};

export default Services;