import React, {Component} from 'react';
import {Carousel, onChange, onClickItem, onClickThumb} from 'react-responsive-carousel';
import styles from './App.css';
import Account from './Account.js';
import Home from './Home.js';
import Product1 from './Product1.js';
import Product2 from './Product2.js';
import StarProduct from './StarProduct.js';
import Checkout from './Checkout.js';
import About from './About.js';
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
          <span className="title"> <Typist>ONLINE SHOPPING MALL</Typist></span>
          <span className="title2"> <Typist>The best online deals for various needy and shinny stuffs in the black market</Typist></span>

          
        </div>
        <div className="row">
          <div className="nav navbar col-xs-12 col-md-12 col-sm-12 col-lg-12">
           <Link className="navItem active col-xs-2 col-md-2 col-sm-2 col-lg-2" to="/">Home</Link>
           <Link className="navItem col-xs-2 col-md-2 col-sm-2 col-lg-2" to="/product-1" activeClassName="active">Product Type1</Link>
           <Link className="navItem col-xs-2 col-md-2 col-sm-2 col-lg-2" to="product-2" activeClassName="active">Product Type2</Link>
           <Link className="navItem col-xs-2 col-md-2 col-sm-2 col-lg-2" to="/StarProduct" activeClassName="active">Star Products</Link>
           <Link className="navItem col-xs-2 col-md-2 col-sm-2 col-lg-2" to="/checkout" activeClassName="active">Checkout</Link>
           <Link className="navItem col-xs-2 col-md-2 col-sm-2 col-lg-2" to="/about" activeClassName="active">About</Link>

          </div>
          </div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path = "/home" component = {Home} />
            <Route path = "/product-1" component = {Product1} />
            <Route path = "/product-2" component = {Product2} />
            <Route path = "/StarProduct" component = {StarProduct} />
            <Route path = "/checkout" component = {Checkout} />
            <Route path = "/about" component = {About} />

          </Switch>

        <div className="row App-footer col-xs-12 col-sm-12 col-md-12">
          Copyright © 2017 Vikas Kumar
        </div>

        </div>
      </Router>
)

export default App
