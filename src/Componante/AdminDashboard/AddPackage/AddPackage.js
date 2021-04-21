import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddPackage = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            countryName: data.countryName,
            price: data.price,
            imageURL: imageURL,
            description: data.description,
            days: data.days
        }
        const url = 'https://shielded-journey-91974.herokuapp.com/addPackage';
        fetch(url, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
          })
          .then(res => console.log('server side response', res))
        };

        const handleImageUpload = event => {
            console.log(event.target.files[0])
            const imageData = new FormData();
            imageData.set('key', 'e43dd6c6b2f81f468021da3067d52f88');
            imageData.append('image', event.target.files[0]);
            
            axios.post('https://api.imgbb.com/1/upload', 
            imageData)
            .then(function (response) {
            setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
            console.log(error);
            });
        
        }
   
    return (
        <div className="container-fluid row">
                <Sidebar/>
            <div className="col-xl-8 col-md-8 admin-Dashboard">
                <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center text-white">Add Packages</h2>
                    <label htmlFor="">Country Name</label><br/>
                    <input name="countryName" placeholder="Enter Country Name" ref={register} /><br/>
                    <label htmlFor="">Package Price</label><br/>
                    <input name="price" placeholder="Enter Pacakage Price" ref={register} /><br/>
                    <label htmlFor="">Days Limite</label><br/>
                    <input name="days" placeholder="Enter Days" ref={register} /><br/>
                    <label htmlFor="">Package Description</label><br/> 
                    <textarea name="description" placeholder="Enter Package description" id="" cols="30" rows="10" ref={register}></textarea><br/>
                    <label htmlFor="">Add Photo</label><br/>
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} /><br/>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        </div>
    );
};

export default AddPackage;