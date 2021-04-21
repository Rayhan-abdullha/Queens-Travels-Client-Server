import React, { useContext, useEffect, useMemo, useState } from "react";
import './CardForm.css'
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { useParams } from "react-router";
import { UserContext } from "../../App";
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";


const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const CardForm = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {ServiceId} = useParams();
    const [service, setService] = useState([])

    useEffect(() =>{
        fetch('https://shielded-journey-91974.herokuapp.com/service/' + ServiceId)
        .then(res => res.json())
        .then(data => setService(data))
        
    },[ServiceId])

    // date
    const [selectedDate, setSelectedDate] = useState({
        chackOutdate: new Date()

    })
    const handleDateChange = (date) => {
        const newDate = {...selectedDate}
        newDate.chackOutdate = date
        setSelectedDate(newDate);
    };

    // chackOut button
    const handleChackOut = () => {
       const checkOutInfo = {selectedDate, loggedInUser, service}

        fetch(`https://shielded-journey-91974.herokuapp.com/addBooking`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(checkOutInfo)
          })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        
       
    }

    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
    const [paymentError, setPaymentError] = useState(null)

    const handleSubmit = async event => {
      event.preventDefault();

      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }

      const {error, payload, PaymentMethod} = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardNumberElement)
      });
      if(error) {
        setPaymentError(error.message);
      } else {
        console.log("[PaymentMethod]", payload, PaymentMethod);
      }
    };


  return (
    <div className="payment-from">
        <form onSubmit={handleSubmit}>
            <label>Name</label><br/>
              <input style={{padding: "15px 10px", border: "0", borderRadius: "5px"}} className="w-100 mb-3" type="text" placeholder="Enter your name"/>
              <label>Email</label><br/>
              <input style={{padding: "15px 10px", border: "0", borderRadius: "5px"}} className="w-100 mb-3" type="text" value={loggedInUser.email}/>
            <label>
              Card number</label><br/>
            <>
              <CardNumberElement
                options={options}
                onReady={() => {
                  console.log("CardNumberElement [ready]");
                }}
                onChange={event => {
                  console.log("CardNumberElement [change]", event);
                }}
                onBlur={() => {
                  console.log("CardNumberElement [blur]");
                }}
                onFocus={() => {
                  console.log("CardNumberElement [focus]");
                }}
              />
            </>
            <label>Expiration date</label><br/>
            <>
            <CardExpiryElement
                options={options}
                onReady={() => {
                  console.log("CardNumberElement [ready]");
                }}
                onChange={event => {
                  console.log("CardNumberElement [change]", event);
                }}
                onBlur={() => {
                  console.log("CardNumberElement [blur]");
                }}
                onFocus={() => {
                  console.log("CardNumberElement [focus]");
                }}
              />
            </>
            <label>CVC</label><br/>
            <>
            <CardCvcElement
                options={options}
                onReady={() => {
                  console.log("CardNumberElement [ready]");
                }}
                onChange={event => {
                  console.log("CardNumberElement [change]", event);
                }}
                onBlur={() => {
                  console.log("CardNumberElement [blur]");
                }}
                onFocus={() => {
                  console.log("CardNumberElement [focus]");
                }}
              />
            </>
            <h5>Your choose service name ({service.name})</h5>
            <h5>Your service charged will be {service.price}</h5>
            
              <Link to="/bookingList">
                <button onClick={handleChackOut} className="btn btn-success" type="submit" disabled={!stripe}>
                Pay
              </button>
              </Link>
            
          </form>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate.date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                        'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Time picker"
                        value={selectedDate.date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                        'aria-label': 'change time',
                        }}
                    />
                    </Grid>
                </MuiPickersUtilsProvider>
          {
            paymentError && <p style={{color: "red"}}>{paymentError}</p>
          }
    </div>
  );
};

export default CardForm;
