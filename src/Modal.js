import React from 'react';

const customStyles = {
  
  content : {
    top                   : '50%',
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

class Modal extends React.Component {  
 
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
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
      <div className="container homePge contents col-xs-12 col-md-12 col-sm-12 col-lg-12">
      <div className="row">

          <button className="btn button-primary" onClick={this.openModal}>Buy</button>
              <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal">
                <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                 <span className="closeBtn" onClick={this.closeModal}>x</span>
                 <div>Modal content goes herr...</div>
                 <form>
                 <button>Cancel</button>
                  <button>Add to Bag</button>
                 </form>
              </Modal>
      </div>
      </div>
    );
  }
}

export default Modal
