import React from 'react';
import './HomeFurn.css';

class HomeFurn extends React.Component {
	constructor() {
      super();

      this.state = {
         data: 
         [
            {
               header: 'Decor',
               id: 1,
               description: "Prepared from the best materials in  differnet variant of 350Ml & 650Ml",
               	img1: "https://rukminim1.flixcart.com/image/312/312/painting/k/h/y/saa4066-saf-original-imae8mavwd5fejmy.jpeg?q=70",
               	img2: "https://rukminim1.flixcart.com/image/312/312/sticker/n/w/y/7127-walltola-decals-tree-with-birds-and-cages-7127-120-100-cm-original-imae3gdvugagdhng.jpeg?q=70",
                img3: "https://rukminim1.flixcart.com/image/312/312/sticker/n/w/y/7127-walltola-decals-tree-with-birds-and-cages-7127-120-100-cm-original-imae3gdvugagdhng.jpeg?q=70"           
            },
				
            {
               header: 'Furnitures',
               id: 2,
               description: "Laptops....",
               img1: "https://rukminim1.flixcart.com/flap/50/50/image/b96e7b.jpg?q=50",
               img2: "https://rukminim1.flixcart.com/image/312/312/shoe-rack/z/3/m/830017633001-hometown-original-imaehy77yyatxsks.jpeg?q=70",
               img3: "https://rukminim1.flixcart.com/image/312/312/recliner/h/z/e/dr-single-leatherette-la-z-boy-brown-original-imaehdtz66cqh2yc.jpeg?q=70"
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

export default HomeFurn
