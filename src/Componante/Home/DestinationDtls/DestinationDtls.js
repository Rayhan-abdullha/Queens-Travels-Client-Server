import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationDtls.css'

const DestinationDtls = (props) => {
    const {name, imageURL, _id} = props.destination
    return (
        <div className="col-xl-4 col-lg-4 col-md-4 mb-4">
            <div className="single-desti">
                <div className="detination-img">
                    <img src={imageURL} alt="imgNotfound"/>
                </div>
                <div className="destination-text text-center">
                    <h4>{name}</h4>
                    <li>
                        <Link to={`/book/${_id}`}>Booking</Link>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default DestinationDtls;