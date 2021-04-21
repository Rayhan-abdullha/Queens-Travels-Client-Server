import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const productData = {
            name: data.name,
            reviewDtls: data.reviewDtls
        }
        const url = 'https://shielded-journey-91974.herokuapp.com/addReview';
        fetch(url, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
          })
          .then(res => console.log('server side response', res))
        };
   
    return (
        <div className="container-fluid row">
                <Sidebar/>
            <div className="col-xl-8 col-md-8 admin-Dashboard">
                <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center text-white">Add Reviews</h2>
                    <label htmlFor="">Your Name</label><br/>
                    <input name="name" placeholder="Enter Your Name" ref={register} /><br/>
                    <label htmlFor="">Reviews Details</label><br/> 
                    <textarea name="reviewDtls" placeholder="Enter your mind" id="" cols="30" rows="10" ref={register}></textarea><br/>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        </div>
    );
};

export default AddReview;