import React, {Component} from "react";
import ReactionContainer from "./ReactionContainer";
import SingleView from "./SingleView";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";

class UIRoot extends Component{
	constructor(props){
		super(props);
		this.state = {
			pokemons: null
		};
	}

	componentDidMount(){
		fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0").then((response) => {
			return response.json();
		}).then((data) => {
			let poke = data.results;
			poke.forEach((p, index) => {
				p.id = index + 1;
			});
			this.setState({pokemons: poke});		
		});
	}	

	getReactionContainer(){
		//return this.state.pokemons ? <ReactionContainer list={this.state.pokemons} /> : <div><p>Empty</p></div>;
		
		if(this.state.pokemons!=null) {
			return <ReactionContainer list={this.state.pokemons} />
		}
		else {
			return <div><p>Empty</p></div>
		}			
	}

	getSingleView(){
		return <SingleView/>;
	}

	render(){
		return(
			<div>
				<Header/>
				
				<Routes>
					<Route path="/" element={this.getReactionContainer()} />
					<Route path="/view/:id" element={<SingleView abc={this.props.match}/>} />
				</Routes>
				
			</div>
		);
	}
}


export default UIRoot;