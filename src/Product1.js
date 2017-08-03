import React from 'react';
import './Product1.css';

class Product1 extends React.Component {
	constructor() {
      super();

      this.state = {
         data: 
         [
            {
               header: 'Mobiles',
               id: 1,
               description: "Prepared from the best materials in  differnet variant of 350Ml & 650Ml",
               	img1: "https://rukminim1.flixcart.com/image/300/300/mobile/5/b/f/motorola-moto-g5-plus-xt-1686-original-imaes3bzhs4thksp.jpeg?q=70",
               	img2: "https://rukminim1.flixcart.com/image/300/300/j2xlzm80/mobile/x/h/j/vivo-y66-1609-original-imaeu5e8cfqcghsf.jpeg?q=70",
                img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZA2i_d6zkl7KJG-ZZZTtSfUg6OptUC0OA50BBbx3LOS6cpx3"           
            },
				
            {
               header: 'Laptops',
               id: 2,
               description: "Laptops....",
               img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_usz840ckAdDH2xB6qYhA8vNtyVzPA3bNEyL3CB-E4LRaOtwnA",
               img2: "https://rukminim1.flixcart.com/image/312/312/j2hw58w0/computer/g/z/c/dell-inspiron-3467-notebook-original-imaetugdqjnq5kh7.jpeg?q=70",
               img3: "https://rukminim1.flixcart.com/image/312/312/j2hw58w0/computer/g/z/c/dell-inspiron-3467-notebook-original-imaetugdqjnq5kh7.jpeg?q=70"
            },
				
            {
               header: 'Television',
               id: 3,
               description: "Television",
               img1: "http://images.all-free-download.com/images/graphiclarge/a_big_tree_landscape_scenery_of_highdefinition_picture_166020.jpg",
               img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtcqmGuG-OWG9cRdK1CPh_DqAcWFVCuo1yXD8g5CWGv9gQj2ELg",
               img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3z0LlbLvSememePXpAhcMIsv1bi5niMQzdISSdSvaK1eNb0Br"
            },
            {
               header: 'Camera',
               id: 4,
               description: "cameras...",
               img1: "https://rukminim1.flixcart.com/image/312/312/camera/c/h/h/sony-cyber-shot-dsc-h300-advance-point-and-shoot-original-imadpzjmc3hwsnf7.jpeg?q=70",
               img2: "https://rukminim1.flixcart.com/image/312/312/camera/c/h/h/sony-cyber-shot-dsc-h300-advance-point-and-shoot-original-imadpzjmc3hwsnf7.jpeg?q=70",
               img3: "https://rukminim1.flixcart.com/image/312/312/camera/c/h/h/sony-cyber-shot-dsc-h300-advance-point-and-shoot-original-imadpzjmc3hwsnf7.jpeg?q=70"            
            },
            {
               header: 'Sounds & Home theatre',
               id: 5,
               description: "sounds and home theatre",
               img1: "https://rukminim1.flixcart.com/image/312/312/home-theatre-system/r/b/h/eternity-2-1-bluetooth-multimedia-speaker-for-home-theatre-use-original-imaebuc9bdhjyazv.jpeg?q=70",
               img2: "https://rukminim1.flixcart.com/image/312/312/home-theatre-system/x/b/k/jamlab-8-sub-10-swans-original-imaehujtyewf7sfg.jpeg?q=70",
               img3: "https://rukminim1.flixcart.com/image/312/312/home-theatre-system/m/d/y/kz-620-kazuko-original-imaebwhfrq7zmec8.jpeg?q=70"
            },
            {
               header: 'Mobile Accesories',
               id: 5,
               description: "mobile accessories",
               img1: "https://rukminim1.flixcart.com/image/312/312/mobile-holder/v/k/s/90cm-universal-long-lazy-mobile-phone-holder-stand-for-bed-desk-original-imaege5grgjzeajc.jpeg?q=70",
               img2: "https://rukminim1.flixcart.com/image/312/312/j1i64y80/mobile-holder/2/g/z/golden-finger-grip-ring-for-samsung-gtc-original-imaetfha2zvpezux.jpeg?q=70",
               img3: "https://rukminim1.flixcart.com/image/312/312/mobile-holder/h/h/w/360-degree-bicycle-motorcycle-vu4-original-imaeqbkhhzgzsktv.jpeg?q=70"
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
         <a className="row">
            <div className="header">{this.props.componentData.header}</div>
              <div className="row">
            	<a href="#"><img alt="image" className="tileImg col-xs-12 col-md-4  col-sm-4 col-lg-4" src={this.props.componentData.img1} width="350px" height="250px"/></a>
            	<a href="#"><img alt="image" className="tileImg col-xs-12 col-md-4  col-sm-4 col-lg-4" src={this.props.componentData.img2} width="350px" height="250px"/></a>
           	    <a href="#"><img alt="image" className="tileImg col-xs-12 col-md-4  col-sm-4 col-lg-4" src={this.props.componentData.img3} width="350px" height="250px"/></a>
               </div>
            <div className="descr">{this.props.componentData.description}</div>
         </a>
         </div>
        
      );
   }
}
export default Product1
