import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navigation from '../Navigation/Navigation';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navigation></Navigation>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;