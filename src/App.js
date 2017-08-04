import React, {Component} from 'react';
import {Carousel, onChange, onClickItem, onClickThumb} from 'react-responsive-carousel';
import styles from './App.css';
import Appliances from './Appliances.js';
import Home from './Home.js';
import Product1 from './Product1.js';
import Product2 from './Product2.js';
import Mens from './Mens.js';
import Checkout from './Checkout.js';
import HomeFurn from './HomeFurn.js';
import Typist from 'react-typist';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
var ReactDOM = require('react-dom');

const App = () => (

  <Router>
        <div className="container">
        <div className="row App-header col-xs-12 col-sm-12 col-md-12">
          <div className="title">ONLINE SHOPPING MALL</div>
          <div className="title2"> <Typist>The best online deals for various needy and shinny stuffs in the black market</Typist></div>
          <div className="topLinks">  
             <a hre="#"  className="headLink">Checkout</a>
             <a hre="#"  className="headLink">Login</a> 
             <a href="#" className="headLink">Home</a>
          </div>    
        </div>
        <div className="row">
          <div className="nav navbar col-xs-12 col-md-12 col-sm-12 col-lg-12">
           <Link className="navItem active col-xs-2 col-md-2 col-sm-2 col-lg-2" to="/">Home</Link>
           <Link className="navItem col-xs-2 col-md-2 col-sm-2 col-lg-2" to="/product-1" activeClassName="active">Electronics</Link>
           <Link className="navItem col-xs-2 col-md-2 col-sm-2 col-lg-2" to="Appliances" activeClassName="active">Appliances</Link>
           <Link className="navItem col-xs-2 col-md-2 col-sm-2 col-lg-2" to="/Mens" activeClassName="active">men</Link>
           <Link className="navItem col-xs-2 col-md-2 col-sm-2 col-lg-2" to="/womens" activeClassName="active">Women</Link>
           <Link className="navItem col-xs-2 col-md-2 col-sm-2 col-lg-2" to="/Home& Furnitures" activeClassName="active">Home& Furnitures</Link>
          </div>
          </div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path = "/home" component = {Home} />
            <Route path = "/product-1" component = {Product1} />
            <Route path = "/Appliances" component = {Appliances} />
            <Route path = "/Mens" component = {Mens} />
            <Route path = "/womens" component = {Checkout} />
            <Route path = "/Home& Furnitures" component = {HomeFurn} />

          </Switch>

        <div className="row App-footer col-xs-12 col-sm-12 col-md-12">
          Copyright © 2017 Vikas Kumar
        </div>

        </div>
      </Router>
)

export default App
