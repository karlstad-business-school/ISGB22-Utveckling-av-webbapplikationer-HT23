import React, {Component} from "react";
import "./App.css";
//import Reaction from "./components/Reaction";

import UIRoot from "./components/UIRoot";
import {BrowserRouter, Routes} from "react-router-dom";


class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			pokemons: null
		};
	}
/*
	componentDidMount(){
		fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0").then((response) => {
			return response.json();
		}).then((data) => {
			this.setState({pokemons: data.results});
		});
	}
	*/
	render(){
		return(
			<BrowserRouter>
				
					<UIRoot/>
				
			</BrowserRouter>
		);
	}
}


export default App;