import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './OrderList.css'

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [booked, setBooked] = useState([]) 
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
                        <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">name</th>
                                        <th>Email ID</th>
                                        <th>Service</th>
                                        <th>Pay With</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                            {
                                booked.map(pd => 
                                    // <tr className="tableData">
                                    //     <td>{pd.loggedInUser.displayName}</td>
                                    //     <td>{pd.loggedInUser.email}</td>
                                    //     <td>{pd.service.name}</td>
                                    //     <td>Credit card</td>
                                    //     <td>Pending</td>
                                    // </tr>  
                                                                            
                                        
                                        <tbody>
                                            <tr>
                                                <td>{pd.loggedInUser.displayName}</td>
                                                <td>{pd.loggedInUser.email}</td>
                                                <td>{pd.service.name}</td>
                                                <td>Credit card</td>
                                                <td className="text-danger">Pending</td>
                                            </tr>
                                        </tbody>                               
                                )
                            }
                        </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;