import React, { Component } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit=(event)=>{
      event.preventDefault();
      
  }

  render() {
    return (
    <div className="container">
      <form>
        <label for="nom">Nom</label>
        <input type="text" id="nom" className="form-control" placeholer="Ajouter"/>
        <button className="btn-danger block-center" onClick={this.handleSubmit.bind(this)}>Ajouter</button>
      </form>
    </div>
    );
  }
}

export default Form;
