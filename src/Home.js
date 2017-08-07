import React from 'react';
import './Home.css';
import ProductDescrp from './ProductDescrp.js';
import {Carousel, onChange, onClickItem, onClickThumb} from 'react-responsive-carousel';
import Modal from 'react-modal';
const customStyles = {
  
  content : {
    top                   : '50%',
    width                 : '350px',
    left                  : '50%',
    border                : '1px solid #ccc',
    right                 : 'auto',
    bottom                : 'auto',
    background            : 'grey',
    marginRight           : '-50%',
    transform               : 'translate(-50%, -50%)',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
};

class Home extends React.Component {
  
	constructor() {
      super();

       this.state = {
         modalIsOpen: false,
         data: 
         [
            {
               header: 'New Best Deals',
               id: 1,
               products: [{
                    id: 1,
                    productId:"mobSam001",
                    offerTag:"Sale 20% off",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "20000",
                    offerPrice:"10000 50% off",
                    specifications: "specs test",
                    img: "https://rukminim1.flixcart.com/image/300/300/mobile/5/b/f/motorola-moto-g5-plus-xt-1686-original-imaes3bzhs4thksp.jpeg?q=70",
                   },
                   {
                    id: 2,
                    productId:"mobSam002",
                    offerTag:"Sale 20% off",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"5000 50% off",
                    specifications: "specs test",
                    img: "https://rukminim1.flixcart.com/image/300/300/j2xlzm80/mobile/x/h/j/vivo-y66-1609-original-imaeu5e8cfqcghsf.jpeg?q=70",

                   },
                   {
                    id: 3,
                    productId:"mobSam002",
                    offerTag:"Sale 20% off",
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
               header: 'Upcomming Deals',
               id: 2,
               products: [{
                    id: 1,
                    productId:"mobSam001",
                    offerTag:"Sale 20% off",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "20000",
                    offerPrice:"19000",
                    specifications: "specs test",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_usz840ckAdDH2xB6qYhA8vNtyVzPA3bNEyL3CB-E4LRaOtwnA",
                   },
                   {
                    id: 2,
                    productId:"mobSam002",
                    offerTag:"",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"9000",
                    specifications: "specs test",
                    img: "https://rukminim1.flixcart.com/image/312/312/j2hw58w0/computer/g/z/c/dell-inspiron-3467-notebook-original-imaetugdqjnq5kh7.jpeg?q=70",

                   },
                   {
                    id: 3,
                    productId:"mobSam002",
                    offerTag:"",
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
               header: 'Designers Choice',
               id: 3,
               products: [{
                    id: 1,
                    productId:"mobSam001",
                    offerTag:"Sale 20% off",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "20000",
                    offerPrice:"19000",
                    specifications: "specs test",
                     img: "http://images.all-free-download.com/images/graphiclarge/a_big_tree_landscape_scenery_of_highdefinition_picture_166020.jpg",
                   },
                   {
                    id: 2,
                    productId:"mobSam002",
                    offerTag:"Sale 20% off",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"9000",
                    specifications: "specs test",
                   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtcqmGuG-OWG9cRdK1CPh_DqAcWFVCuo1yXD8g5CWGv9gQj2ELg",
                   },
                   {
                    id: 3,
                    productId:"mobSam002",
                    offerTag:"Sale 20% off",
                    productName: "Samsung",
                    about: "Best upcomming samsung series mobile",
                    sellingPrice: "10000",
                    offerPrice:"9000",
                    specifications: "specs test",
                      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3z0LlbLvSememePXpAhcMIsv1bi5niMQzdISSdSvaK1eNb0Br"
                   }
               ],       
            }
         ]
      };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed. 
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
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
                 {this.props.componentData.products.map((item, i) => (
                <a className="pddescPge" href="#" onClick={this.openModal}>

              <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal">
                <h2 className="pdName">{this.props.componentData.products[i].productName}</h2>
                 <span className="closeBtn" onClick={this.closeModal}>x</span>
                 <div className="modContent">
                    <div className="tilesL2 col-xs-12 col-md-3  col-md-offet-1 col-sm-3 col-sm-offet-1 col-lg-3 col-lg-offet-1">
                      <div className="row">
                         div className="offerTag">{this.props.componentData.products[i].offerTag}</div>
                          <img alt="image" className="tileImg col-xs-12 col-md-4  col-sm-4 col-lg-4" src={this.props.componentData.products[i].img} width="350px" height="250px"/>                   
                          <h2 className="pdName">{this.props.componentData.products[i].productName}</h2>
                                <div className="price">
                                      <span className="sellPrice">Rs:{this.props.componentData.products[i].sellingPrice}</span>
                                      <span className="offerPrice">Rs:{this.props.componentData.products[i].offerPrice}</span>
                                </div>
                          <h3 className="pdAbout">{this.props.componentData.products[i].about}</h3>
                    </div>
                 </div>
                 <form>
                 <button className="cancelBtn">Cancel</button>
                  <button className="addBtn">Add to Bag</button>
                 </form>
              </Modal>

                  <div className="tilesL2 col-xs-12 col-md-3  col-md-offet-1 col-sm-3 col-sm-offet-1 col-lg-3 col-lg-offet-1">
                      <div className="row">
                        <div className="offerTag">{this.props.componentData.products[i].offerTag}
                        </div>
                        <img alt="image" className="tileImg col-xs-12 col-md-4  col-sm-4 col-lg-4" src={this.props.componentData.products[i].img} width="350px" height="250px"/>                   
                        <h2 className="pdName">{this.props.componentData.products[i].productName}</h2>
                              <div className="price">
                                    <span className="sellPrice">Rs:{this.props.componentData.products[i].sellingPrice}</span>
                                    <span className="offerPrice">Rs:{this.props.componentData.products[i].offerPrice}</span>
                              </div>
                        <h3 className="pdAbout">{this.props.componentData.products[i].about}</h3>
                      </div>                 
                      <div className="specs">
                                {this.props.componentData.products[i].specifications}
                      </div> 
                  </div>
                </a>  
                ))}
            </div>
         </div>
      );
   }
}
export default Home
