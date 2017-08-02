import React, {Component} from 'react';
import {Carousel, onChange, onClickItem, onClickThumb} from 'react-responsive-carousel';
import styles from './App.css';
import Account from './Account.js';
import Home from './Home.js';
import Product1 from './Product1.js';
import Product2 from './Product2.js';
import Checkout from './Checkout.js';
import About from './About.js';
import Contact from './Contact.js';
import Typist from 'react-typist';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import ('./contact.js');
var ReactDOM = require('react-dom');

const App = () => (

  <Router>
        <div className="container">
        <div className="row App-header col-xs-12 col-sm-12 col-md-12">
          <span className="title"> <Typist>Vikas kumar</Typist></span>
          <span className="title2"> <Typist>The best way to know me is to talk to me</Typist></span>

          
        </div>
        <div className="row">
          <div className="nav navbar col-xs-12 col-md-12 col-sm-12 col-lg-12">
           <Link className="navItem active col-xs-3 col-md-3 col-sm-3 col-lg-3" to="/">Home</Link>
           <Link className="navItem col-xs-2 col-md-2 col-sm-2 col-lg-2" to="/product-1">Product Type1</Link>
           <Link className="navItem col-xs-2 col-md-2 col-sm-2 col-lg-2" to="product-2">Product Type2</Link>
           <Link className="navItem col-xs-2 col-md-2 col-sm-2 col-lg-2" to="/checkout">Checkout</Link>
           <Link className="navItem col-xs-2 col-md-2 col-sm-2 col-lg-2" to="/about">About</Link>
           <Link className="navItem col-xs-2 col-md-2 col-sm-2 col-lg-2" to="/contact">Contact</Link>
          </div>
          </div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path = "/home" component = {Home} />
            <Route path = "/product-1" component = {Product1} />
            <Route path = "/product-2" component = {Product2} />
            <Route path = "/checkout" component = {Checkout} />
            <Route path = "/about" component = {About} />
            <Route path = "/contact" component = {Contact} />
          </Switch>

        <div className="row App-footer col-xs-12 col-sm-12 col-md-12">
          Copyright © 2017 Vikas Kumar
        </div>

        </div>
      </Router>
)

export default App
