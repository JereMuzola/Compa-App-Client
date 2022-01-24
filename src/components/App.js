import React,{Component} from 'react';

import Header from "../shared/components/layout/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'font-awesome/css/font-awesome.css';
import Comp from './Compte/Compte';
import Comp1 from './CompteDiv/index';
import Comp2 from './SousCompte/index';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net/js/jquery.dataTables.min';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from '../components/Home/index';
import Journalisation from '../components/Operation/index'

class App extends Component{

	render(){
		return (
			<BrowserRouter>
				<div className="container-fluid">
					<Header titre="ComptaApp"/>
				    <Route exact path="/" component={Home}/>
					<Route exact path="/compte" component={Comp}/>
					<Route exact path="/compteDiv" component={Comp1}/>
					<Route exact path="/sousCompte" component={Comp2}/>
					<Route exact path="/mouvement/mutation" component={Journalisation}/>
				</div>
			</BrowserRouter>
		);
	}
}
export default App;
