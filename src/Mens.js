import React from 'react';
import './Mens.css';

class Mens extends React.Component {
  	constructor() {
      super();

      this.state = {
         data: 
         [
            {
               header: 'Footwear',
               id: 1,
               description: "Prepared from the best materials in  differnet variant of 350Ml & 650Ml",
               	img1: "https://rukminim1.flixcart.com/image/312/312/j26gmfk0/shoe/w/n/m/revolution-3-7-nike-black-total-orange-dark-grey-turf-orange-original-imaethen5uk7qtnh.jpeg?q=70",
               	img2: "https://rukminim1.flixcart.com/image/312/312/j4ohd3k0/sandal/q/w/p/zoom-dp-8-puma-steel-gray-gray-violet-high-risk-red-original-imaevjpyawuq6bfn.jpeg?q=70",
                img3: "https://rukminim1.flixcart.com/image/312/312/j5mrxjk0/slipper-flip-flop/f/h/x/core-flip-12-reebok-navy-red-white-original-imaew9vrrmny2nmj.jpeg?q=70"           
            },
				
            {
               header: 'Watches',
               id: 2,
               description: "Laptops....",
               img1: "https://rukminim1.flixcart.com/image/312/312/watch/4/y/7/ch2600i-fossil-original-imaecc9vxbdcxwxv.jpeg?q=70",
               img2: "https://rukminim1.flixcart.com/image/312/312/watch/4/y/7/ch2600i-fossil-original-imaecc9vxbdcxwxv.jpeg?q=70",
               img3: "https://rukminim1.flixcart.com/image/312/312/watch/h/c/v/ch2601-fossil-original-imaekn487y3fgqyg.jpeg?q=70"
            },
				
            {
               header: 'Top Wear',
               id: 3,
               description: "Television",
               img1: "https://rukminim1.flixcart.com/image/312/312/watch/h/c/v/ch2601-fossil-original-imaekn487y3fgqyg.jpeg?q=70",
               img2: "https://rukminim1.flixcart.com/image/312/312/watch/h/c/v/ch2601-fossil-original-imaekn487y3fgqyg.jpeg?q=70",
               img3: "https://rukminim1.flixcart.com/image/312/312/watch/h/c/v/ch2601-fossil-original-imaekn487y3fgqyg.jpeg?q=70r"
            },
            {
               header: 'bottom Wear',
               id: 4,
               description: "cameras...",
               img1: "https://rukminim1.flixcart.com/image/312/312/watch/h/c/v/ch2601-fossil-original-imaekn487y3fgqyg.jpeg?q=70",
               img2: "https://rukminim1.flixcart.com/image/312/312/watch/h/c/v/ch2601-fossil-original-imaekn487y3fgqyg.jpeg?q=70",
               img3: "https://rukminim1.flixcart.com/image/312/312/watch/h/c/v/ch2601-fossil-original-imaekn487y3fgqyg.jpeg?q=70"            
            },
            {
               header: 'Mens Grooming',
               id: 5,
               description: "sounds and home theatre",
               img1: "https://rukminim1.flixcart.com/image/312/312/home-theatre-system/r/b/h/eternity-2-1-bluetooth-multimedia-speaker-for-home-theatre-use-original-imaebuc9bdhjyazv.jpeg?q=70",
               img2: "https://rukminim1.flixcart.com/image/312/312/home-theatre-system/x/b/k/jamlab-8-sub-10-swans-original-imaehujtyewf7sfg.jpeg?q=70",
               img3: "https://rukminim1.flixcart.com/image/312/312/home-theatre-system/m/d/y/kz-620-kazuko-original-imaebwhfrq7zmec8.jpeg?q=70"
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
export default Mens
