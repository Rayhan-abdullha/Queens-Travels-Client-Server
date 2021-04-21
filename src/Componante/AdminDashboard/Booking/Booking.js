import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Boking.css'
const Booking = () => {
    const [booked, setBooked] = useState([]);
    useEffect(() =>{
        fetch('https://shielded-journey-91974.herokuapp.com/checkOut')
        .then(res => res.json())
        .then(data => setBooked(data))
        
    },[])
    return (
        <div className="container-fluid row">
            <Sidebar/>
            <div className="col-xl-8 col-md-8">
                <div className="p-5 row">
                    {
                        booked.map(pd => 
                            
                            <div className="col-xl-6 col-md-6">
                                <div className="single-booked">
                                    <div className="booking-img mb-3">
                                        <img style={{width: "100px"}} src={pd.service.imageURL} alt=""/>
                                        <h4 className="text-dark bg-danger">Pending</h4>
                                    </div>
                                    <h3>{pd.service.name}</h3>
                                    <p>{pd.service.description}</p>
                                    <p>{pd.loggedInUser.email}</p>
                                    </div>
                            </div>    
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Booking;