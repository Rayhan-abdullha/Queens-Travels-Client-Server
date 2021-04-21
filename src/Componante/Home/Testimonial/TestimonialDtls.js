import { Star, StoreMallDirectoryRounded } from '@material-ui/icons';
import React from 'react';

const TestimonialDtls = (props) => {
    const {name, reviewDtls} = props.review
    return (
        <div className="col-xl-3 col-md-6">
            <div className="single-review">
                <h5>{name}</h5>
                <li style={{color: "#ffa500"}}><Star/><Star/><Star/><Star/><Star/></li>
                <p>{reviewDtls}</p>
            </div>
        </div>
    );
};

export default TestimonialDtls;