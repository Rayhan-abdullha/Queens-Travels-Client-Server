import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Delete, Edit } from '@material-ui/icons';
import './ManageService.css'
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [service, setService] = useState([])
    const [destination, setDetinations] = useState([])
    // manage service
    useEffect(() =>{
        fetch('https://shielded-journey-91974.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setService(data))
        
    },[])

    const deleteProduct = (id) => {
        fetch(`https://shielded-journey-91974.herokuapp.com/deleted/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('delete sucessfully')
        })
    }
    return (
        <div className="manageProduct row">
            <Sidebar/>
           <div className="col-xl-8 col-md-8">
                <table className="manageItems">
                    <tr style={{padding: "10px 0"}}>
                        <th>Name</th>
                        <th>Description</th> 
                        <th>Package</th> 
                        <th>Action</th>
                    </tr>
                    {
                        service.map(services => 
                            <tr>
                                <td>{services.name}</td>
                                <td>{services.description}</td>
                                <td className="pl-5">1</td>
                                <td><Edit/> <Delete onClick={() => deleteProduct(services._id)}/></td>
                            </tr>    
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageService;