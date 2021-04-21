import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDtls.css'
const ServiceDtls = (props) => {
    const {imageURL, name, description, price, _id} = props.services
    return (
        <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="single-services mb-5">
                <img src={imageURL} alt="notFound"/>
                <h4>{name}</h4>
                <p>{description}</p>
                <h5 className="mb-3">{price}</h5>
                <Link to={`/book/${_id}`}>
                    <button className="btn btn-success">Booking Now</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDtls;