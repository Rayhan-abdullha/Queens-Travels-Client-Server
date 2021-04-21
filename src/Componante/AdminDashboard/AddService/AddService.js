import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL,
            description: data.description
        }
        const url = 'https://shielded-journey-91974.herokuapp.com/addEvent';
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
                <h2 className="text-center text-white">Add Services</h2>
                    <label htmlFor="">Service Name</label><br/>
                    <input name="name" placeholder="Enter Service Name" ref={register} /><br/>
                    <label htmlFor="">Service Price</label><br/>
                    <input name="price" placeholder="Enter Service Prcie" ref={register} /><br/>
                    <label htmlFor="">Service Description</label><br/> 
                    <textarea name="description" placeholder="Enter Service Description" id="" cols="30" rows="10" ref={register}></textarea><br/>
                    <label htmlFor="">Add Photo</label><br/>
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} /><br/>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        </div>
    );
};

export default AddService;