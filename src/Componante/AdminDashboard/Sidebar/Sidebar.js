import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faHome, faPlus, faTasks, faUser, } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://shielded-journey-91974.herokuapp.com/checkAdmin', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: loggedInUser.email})
          })
          .then(res => res.json())
          .then(data => setIsAdmin(data));

    },[])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-xl-2 col-md-4 col-sm-12 py-5 px-4">
            <ul className="list-unstyled">
                <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>

                { isAdmin && 
                        <div>
                            <li>
                                <Link to="/book" className="text-white">
                                    <FontAwesomeIcon icon={faTasks}/> <span>Book</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/bookingList" className="text-white">
                                    <FontAwesomeIcon icon={faTasks}/> <span>Booking List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/review" className="text-white">
                                    <FontAwesomeIcon icon={faTasks}/> <span>Review</span>
                                </Link>
                            </li>
                        </div>
                    }
                    
                    <li>
                        <Link to="/orderList" className="text-white">
                            <FontAwesomeIcon icon={faBed} /> <span>Order list</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/service" className="text-white">
                            <FontAwesomeIcon icon={faPlus}/> <span>Add service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/destination" className="text-white">
                            <FontAwesomeIcon icon={faPlus}/> <span>Add Destination</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/package" className="text-white">
                            <FontAwesomeIcon icon={faPlus}/> <span>Add Package</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin" className="text-white">
                            <FontAwesomeIcon icon={faUser}/> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageService" className="text-white">
                            <FontAwesomeIcon icon={faTasks}/> <span>Manage Service</span>
                        </Link>
                    </li>
                <div>
                    <Link to="#" className="text-white"><span>Logout</span></Link>
                </div>
            </ul>
        </div>
    );
};

export default Sidebar;