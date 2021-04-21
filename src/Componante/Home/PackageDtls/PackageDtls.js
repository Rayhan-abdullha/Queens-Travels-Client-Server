import { Star } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './PackagesDtls.css'

const PackageDtls = (props) => {
    const {price, imageURL, countryName, description, days, _id} = props.PackageDtls;
    return (
        <div className="col-xl-4 col-md-4 mb-4">
            <div className="single-package">
                <div className="package-img">
                    <img src={imageURL} alt="imageNotFound"/>
                </div>
                <div className="package-dtls">
                    <h4>{countryName}</h4>
                    <li className="mb-3" style={{color: "#ffa500"}}><Star/><Star/><Star/><Star/><Star/></li>
                    <span style={{ marginTop: "10px"}}>{days}</span>                  
                    <p>{description}</p>
                    <h5 className="mb-3">{price}</h5>
                    <Link to={`/book/${_id}`}>
                        <button className="btn btn-success">Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PackageDtls;