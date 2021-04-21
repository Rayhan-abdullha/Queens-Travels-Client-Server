import React from 'react';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';

const Book = () => {
    return (
        <div className="container-fluid row">
            <Sidebar/>
            <div className="col-xl-8 col-md-8">
                <ProcessPayment/>
            </div>
        </div>
    );
};

export default Book;