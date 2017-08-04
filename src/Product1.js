import React from 'react';
import './Product1.css';
import Modal from './Modal.js';

class Product1 extends React.Component {
	constructor() {
      super();

      this.state = {
         modalIsOpen: false,
         data: 
         [
            {
               header: 'Mobiles',
               id: 1,
               products: [{
                    productId:"mobSam001",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "20000",
                    offerPrice:"19000",
                    specifications: "specs test",
                    img: "https://rukminim1.flixcart.com/image/300/300/mobile/5/b/f/motorola-moto-g5-plus-xt-1686-original-imaes3bzhs4thksp.jpeg?q=70",
                   },
                   {
                    productId:"mobSam002",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"9000",
                    specifications: "specs test",
                    img: "https://rukminim1.flixcart.com/image/300/300/j2xlzm80/mobile/x/h/j/vivo-y66-1609-original-imaeu5e8cfqcghsf.jpeg?q=70",

                   },
                   {
                    productId:"mobSam002",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"9000",
                    specifications: "specs test",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZA2i_d6zkl7KJG-ZZZTtSfUg6OptUC0OA50BBbx3LOS6cpx3"   
                   }
               ],       
            },
              {
               header: 'Laptops',
               id: 2,
               products: [{
                    productId:"mobSam001",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "20000",
                    offerPrice:"19000",
                    specifications: "specs test",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_usz840ckAdDH2xB6qYhA8vNtyVzPA3bNEyL3CB-E4LRaOtwnA",
                   },
                   {
                    productId:"mobSam002",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"9000",
                    specifications: "specs test",
                    img: "https://rukminim1.flixcart.com/image/312/312/j2hw58w0/computer/g/z/c/dell-inspiron-3467-notebook-original-imaetugdqjnq5kh7.jpeg?q=70",

                   },
                   {
                    productId:"mobSam002",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"9000",
                    specifications: "specs test",
                     img: "https://rukminim1.flixcart.com/image/312/312/j2hw58w0/computer/g/z/c/dell-inspiron-3467-notebook-original-imaetugdqjnq5kh7.jpeg?q=70"
                   }
               ],       
            },
             {
               header: 'Television',
               id: 3,
               products: [{
                    productId:"mobSam001",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "20000",
                    offerPrice:"19000",
                    specifications: "specs test",
                     img: "http://images.all-free-download.com/images/graphiclarge/a_big_tree_landscape_scenery_of_highdefinition_picture_166020.jpg",
                   },
                   {
                    productId:"mobSam002",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"9000",
                    specifications: "specs test",
                   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtcqmGuG-OWG9cRdK1CPh_DqAcWFVCuo1yXD8g5CWGv9gQj2ELg",
                   },
                   {
                    productId:"mobSam002",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"9000",
                    specifications: "specs test",
                      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3z0LlbLvSememePXpAhcMIsv1bi5niMQzdISSdSvaK1eNb0Br"
                   }
               ],       
            },
              {
               header: 'Television',
               id: 4,
               products: [{
                    productId:"mobSam001",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "20000",
                    offerPrice:"19000",
                    specifications: "specs test",
                    img: "https://rukminim1.flixcart.com/image/312/312/camera/c/h/h/sony-cyber-shot-dsc-h300-advance-point-and-shoot-original-imadpzjmc3hwsnf7.jpeg?q=70",
                   },
                   {
                    productId:"mobSam002",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"9000",
                    specifications: "specs test",
                    img: "https://rukminim1.flixcart.com/image/312/312/camera/c/h/h/sony-cyber-shot-dsc-h300-advance-point-and-shoot-original-imadpzjmc3hwsnf7.jpeg?q=70",
                   },
                   {
                    productId:"mobSam002",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"9000",
                    specifications: "specs test",
                      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3z0LlbLvSememePXpAhcMIsv1bi5niMQzdISSdSvaK1eNb0Br"
                   }
               ],       
            },
             {
               header:'Sounds & Home theatre',
               id: 5,
               products: [{
                    productId:"mobSam001",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "20000",
                    offerPrice:"19000",
                    specifications: "specs test",
                    img: "https://rukminim1.flixcart.com/image/312/312/home-theatre-system/r/b/h/eternity-2-1-bluetooth-multimedia-speaker-for-home-theatre-use-original-imaebuc9bdhjyazv.jpeg?q=70",
                   },
                   {
                    productId:"mobSam002",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"9000",
                    specifications: "specs test",
                    img: "https://rukminim1.flixcart.com/image/312/312/home-theatre-system/x/b/k/jamlab-8-sub-10-swans-original-imaehujtyewf7sfg.jpeg?q=70",
                   },
                   {
                    productId:"mobSam002",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"9000",
                    specifications: "specs test",
                      img: "https://rukminim1.flixcart.com/image/312/312/home-theatre-system/m/d/y/kz-620-kazuko-original-imaebwhfrq7zmec8.jpeg?q=70"
                   }
               ],       
            },
             {
               header:'Sounds & Home theatre',
               id: 5,
               products: [{
                    productId:"mobSam001",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "20000",
                    offerPrice:"19000",
                    specifications: "specs test",
                    img: "https://rukminim1.flixcart.com/image/312/312/mobile-holder/v/k/s/90cm-universal-long-lazy-mobile-phone-holder-stand-for-bed-desk-original-imaege5grgjzeajc.jpeg?q=70",
                   },
                   {
                    productId:"mobSam002",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"9000",
                    specifications: "specs test",
                     img: "https://rukminim1.flixcart.com/image/312/312/j1i64y80/mobile-holder/2/g/z/golden-finger-grip-ring-for-samsung-gtc-original-imaetfha2zvpezux.jpeg?q=70",
                   },
                   {
                    productId:"mobSam002",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"9000",
                    specifications: "specs test",
                      img: "https://rukminim1.flixcart.com/image/312/312/mobile-holder/h/h/w/360-degree-bicycle-motorcycle-vu4-original-imaeqbkhhzgzsktv.jpeg?q=70"
                    }
                 ]      
            }           
               
         ]
      }
    }


  render() {
    return (
        <div className="row">
          <div className="homepge col-xs-12 col-md-12 col-sm-12 col-lg-12">
               {this.state.data.map((dynamicComponent, i) => <Content 
                  key = {i} componentData = {dynamicComponent}/>)}

            </div>
         </div>
    );
  }
}

class Content extends React.Component {
   render() {
      return (
         <div  className="tiles col-xs-12 col-md-12  col-sm-12 col-lg-12" onClick="">        
            <div className="header">{this.props.componentData.header}</div>
              <div className="row">
            	 <a className="pddescPge" href="#" onClick={this.openModal}>
                 <div className="tilesL2 col-xs-12 col-md-4  col-sm-4 col-lg-4">
                 <div className="row">
                   <h2>{this.props.componentData.products[0].productName}</h2>
                   <h3>{this.props.componentData.products[0].about}</h3>
                   <h3 className="sellPrice">Rs:{this.props.componentData.products[0].sellingPrice}</h3>
                   <h3 className="offerPrice">{this.props.componentData.products[0].offerPrice}</h3>
                   <img alt="image" className="tileImg col-xs-12 col-md-4  col-sm-4 col-lg-4" src={this.props.componentData.products[0].img} width="350px" height="250px"/>
                  </div>                 
                  <div className="specs">
                    {this.props.componentData.products[0].specifications}
                  </div>
                  </div>
               </a>
            	 
              </div>
              
         </div>
        
      );
   }
}
export default Product1
