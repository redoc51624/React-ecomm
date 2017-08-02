import React from 'react';
import './Home.css';
import ProductDescrp from './ProductDescrp.js';
import {Carousel, onChange, onClickItem, onClickThumb} from 'react-responsive-carousel';


class Home extends React.Component {
	constructor() {
      super();

      this.state = {
         data: 
         [
            {
               header: 'First...',
               id: 1,
               description: "first description",
               img: "https://www.planwallpaper.com/static/images/best-scenery-wallpaper-21.jpg"
            },
				
            {
               header: 'Second...',
               id: 2,
               description: "2nds description",
               img: "https://www.planwallpaper.com/static/images/HD-Scenery-Wallpapers-1.jpg"
            },
				
            {
               header: 'Third...',
               id: 3,
               description: "3rds description",
               img: "http://images.all-free-download.com/images/graphiclarge/a_big_tree_landscape_scenery_of_highdefinition_picture_166020.jpg"
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
         <div  className="tiles col-xs-12 col-md-4  col-sm-4 col-lg-4" onClick="">
            <div className="header">{this.props.componentData.header}</div>
            <img alt="image" className="tileImg" src={this.props.componentData.img} width="350px" height="250px"/>
            <div className="descr">{this.props.componentData.description}</div>
         </div>
        
      );
   }
}
export default Home
