import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import FacebookIcon from '@material-ui/icons/Facebook';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useState({
        error: '',
        success: false
    });
    const [newUser, setNewUser] = useState(true);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" }}

    // google signIn
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then(res => {
            setUser(res.user)
            setLoggedInUser(res.user)
           history.replace(from)
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage, email, credential)
        });
    }

    return (
        <div className="container">
           <div className="logIn-form">
                <div className="logInLogo">
                    <h2>Queens Travels</h2>
                </div>
                <div className="loginInfo">
                    <h3>Login With</h3>
                    <button onClick={handleSignIn}> Continue with Google</button><br/>
                    <span>Don't Have an account ?</span> <span style={{color: "#117a8b"}}>Create account</span>
                </div>
           </div>
        </div>
    );
};

export default Login;