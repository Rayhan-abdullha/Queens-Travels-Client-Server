import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../src/Componante/Home/Home/Home'
import Login from '../src/Componante/Login/Login'
import NotFound from '../src/Componante/NotFound/NotFound'
import PrivateRoute from '../src/Componante/PrivetRoute/PrivetRoute'
import Dashboard from '../src/Componante/AdminDashboard/Dashboard/Dashboard'
import AddService from './Componante/AdminDashboard/AddService/AddService';
import ManageService from './Componante/AdminDashboard/ManageService/ManageService';
import { createContext, useState } from 'react';
import AddPackage from './Componante/AdminDashboard/AddPackage/AddPackage';
import AddReview from './Componante/AdminDashboard/AddReview/AddReview';
import AddDestination from './Componante/AdminDashboard/AddDestination/AddDestination';
import Contact from './Componante/Contact/Contact';
import Book from './Componante/AdminDashboard/Book/Book';
import Admin from './Componante/AdminDashboard/Admin/Admin';
import Booking from './Componante/AdminDashboard/Booking/Booking';
import OrderList from './Componante/AdminDashboard/OrderList/OrderList';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/contactUs">
            <Contact/>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/service">
            <AddService/>
          </PrivateRoute>
          <PrivateRoute path="/package">
            <AddPackage/>
          </PrivateRoute>
          <PrivateRoute path="/destination">
            <AddDestination/>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <AddReview/>
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService/>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>
          <PrivateRoute path="/book/:ServiceId">
            <Book/>
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <Booking/>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
