import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className="headerMain">
            <div style={{height: "730px"}} className="container text-white">
                <div className="header-text">
                    <h1>WELCOME</h1>
                    <span>To The Travel</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Ullam, sit.<br/> Obcaecati odio ut eum, dolorem deleniti ea beatae a culpa.</p>
                    <button className="btn btn-success">Booking Now</button>
                </div>
            </div>
        </main>
        
    );
};

export default HeaderMain;