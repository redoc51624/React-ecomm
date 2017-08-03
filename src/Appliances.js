import React from 'react';
import './Appliances.css';

class Appliances extends React.Component {
	constructor() {
      super();

      this.state = {
         data: 
         [
            {
               header: 'Wassing Machine',
               id: 1,
               description: "Prepared from the best materials in  differnet variant of 350Ml & 650Ml",
               	img1: "https://rukminim1.flixcart.com/merch/50/50/images/1469787736475.jpg?q=50",
               	img2: "https://rukminim1.flixcart.com/image/312/312/washing-machine-new/f/r/p/ifb-senator-aqua-sx-8-kg-original-imae4s4zgkdzmxhy.jpeg?q=70",
                img3: "https://rukminim1.flixcart.com/image/312/312/j391ifk0/washing-machine-new/p/x/m/p7001r3f-lg-original-imaeuffyftxhxgxf.jpeg?q=70"           
            },
				
            {
               header: 'Kitchen Appliances',
               id: 2,
               description: "Laptops....",
               img1: "https://rukminim1.flixcart.com/image/312/312/mixer-grinder-juicer/g/h/q/philips-hl1606-03-hl1606-03-original-imae9ztbfd5ecknh.jpeg?q=70",
               img2: "https://rukminim1.flixcart.com/image/312/312/electric-kettle/g/8/g/havells-aquis-ii-aquis-ii-original-imae3p6y2su8uenh.jpeg?q=70",
               img3: "https://rukminim1.flixcart.com/image/312/312/induction-cook-top/z/b/w/prestige-pic-20-0-41935-pic-20-0-41935-original-imaebmjpy5trmtha.jpeg?q=70"
            },
				
            {
               header: 'Smart Home Appliances',
               id: 3,
               description: "Television",
               img1: "https://rukminim1.flixcart.com/image/312/312/smart-lighting/f/m/f/rsl01-reos-original-imaez7uccshpgbxh.jpeg?q=70",
               img2: "https://rukminim1.flixcart.com/image/312/312/smart-monitoring-system/f/u/q/ap005-sricam-original-imaeeg8ym5xxfzga.jpeg?q=70",
               img3: "https://rukminim1.flixcart.com/image/312/312/video-door-phone/g/s/s/vl-sw251bx-panasonic-original-imaefjt3mznrcbzb.jpeg?q=70"
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

export default Appliances
