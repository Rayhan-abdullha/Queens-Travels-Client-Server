import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PackageDtls from '../PackageDtls/PackageDtls';

const Package = () => {
    const [packages, setPackage] = useState([])
    useEffect(() =>{
        fetch('https://shielded-journey-91974.herokuapp.com/package')
        .then(res => res.json())
        .then(data => setPackage(data))
        
    },[])
    return (
        <div className="Package">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h2>Popular Tour Package</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae <br/> magni nulla voluptatem aliquid provident distination?</p>
                </div>
                <div className="row">
                    { 
                        packages.map(pack => <PackageDtls PackageDtls={pack}></PackageDtls>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Package;