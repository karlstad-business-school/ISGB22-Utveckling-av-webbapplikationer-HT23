import React, {Component} from "react";
import Reaction from "./Reaction"

class ReactionContainer extends Component{

	constructor(props){
		super(props);
		this.defaultList = Array();
		
		this.state = {
			
			pokemons: this.props.list
		};

		this.defaultList = this.props.list;
	}

	//Glöm inte bind med klaser...
	filter(e){
		let text = e.target.value; 
		let allPokemons = this.state.pokemons;
		let searchPokemons = allPokemons.filter(p => p.name.includes(text));

		if(text.length <= 0 || text == ""){
			this.setState({pokemons: this.defaultList});
		}else{
			this.setState({pokemons: searchPokemons});
		}
	}

	render(){
		let content = null;

		//2 typer av if/else-satser
		if(this.state.pokemons.length <= 0){
			content = <h2>No pokemons found</h2>;
		}else{
			
			content = this.state.pokemons.map((item, index) => {
				return <Reaction key={item.id} image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (item.id) +".png"} name={item.name} url={item.url} id={item.id}/>
			})			
		}
						
					

		return(
			<div className="pokemon-container">
			<h1 className="pokemon-title text-center">Pokemon list</h1>
			<div className="pokemon-search">
				
				<input type="text" onChange={this.filter.bind(this)}/>
			</div>
			
				{content}
				{
					/*
					this.state.pokemons.length <= 0 ? (
						<h2>No pokemons found</h2>
					): (
						this.state.pokemons.map((item, index) => {
							return <Reaction key={item.id} image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (item.id) +".png"} name={item.name} url={item.url} id={item.id}/>
						})
					)*/
				}
			</div>
		);
	}
}

export default ReactionContainer;

//<label>Search: </label>
/*
	Eller detta..

	render () {
	  return (
	    <div>
	      {(() => {
	        if (someCase) {
	          return (
	            <div>someCase</div>
	          )
	        } else if (otherCase) {
	          return (
	            <div>otherCase</div>
	          )
	        } else {
	          return (
	            <div>catch all</div>
	          )
	        }
	      })()}
	    </div>
	  )
	}

*/