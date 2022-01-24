import React, { Component } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {clients:[
        {id:1,nom:"MUZOLA BIAKENGA JEREMIE"},
        {id:2,nom:"KUBI BIAKENGA JOVANIE"},
        {id:3,nom:"KASEMIE BIAKENGA JOVANIE"},
        {id:4,nom:"NSUNDA BIAKENGA MAJOIE"}
    ]
    };
  }

  Ondelete=id=>{
      const clients=this.state.clients.slice();
      const index=clients.findIndex((element) => {
        return element.id===id;
      });
      clients.splice(index, 1);
      this.setState({clients});
  }
  
  render() {
    const elements=this.state.clients.map((client) => {
        return <li>{client.nom} <button className="btn-dark" onClick={()=>this.Ondelete(client.id)}>X</button> </li>
    })
    return (
      <div className='container'>
        <ul className="list-unstyled">
        {elements}
        </ul>
      </div>
    );
  }
}

export default List;


