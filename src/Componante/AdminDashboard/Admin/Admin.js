import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const adminEmail = {
            email: data.email,
        }
        const url = 'https://shielded-journey-91974.herokuapp.com/addAdmin';
        fetch(url, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminEmail)
          })
          .then(res => console.log('server side response', res))
        };
    return (
        <div className="container-fluid row">
                <Sidebar/>
            <div className="col-xl-8 col-md-8 admin-Dashboard">
                <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center text-white">Add Admin</h2>
                    <label htmlFor="">Create Admin Email</label><br/>
                    <input name="email" placeholder="admin@gmail.com" ref={register} /><br/>
                    <input type="submit" value="Make Admin"/>
                </form>
            </div>
        </div>
    );
};

export default Admin;