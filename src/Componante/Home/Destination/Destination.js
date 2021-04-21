import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DestinationDtls from '../DestinationDtls/DestinationDtls';

const Destination = (props) => {
    const [destinations, setDestinations] = useState([]) 
    useEffect(() =>{
        fetch('https://shielded-journey-91974.herokuapp.com/destinations')
        .then(res => res.json())
        .then(data => setDestinations(data))
        
    },[])
    return (
        <div className="destination-area py-5">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h2>Popular Destination</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae <br/> magni nulla voluptatem aliquid provident distination?</p>
                </div>
                <div className="row">
                    {
                        destinations.map(destination => <DestinationDtls destination={destination}></DestinationDtls>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Destination;