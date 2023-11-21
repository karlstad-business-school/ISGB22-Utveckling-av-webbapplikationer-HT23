import React, {Component} from "react";
import { useParams, Link } from "react-router-dom";
import "./SingleView.css";


function withParmas(Component){
	return props => <Component {...props} params={useParams()} />
}

class SingleView extends Component{
	constructor(props){
		super(props);

		this.state = {
			pokemon: null
		};
	}

	componentDidMount(){
		fetch("https://pokeapi.co/api/v2/pokemon/" + this.props.params.id).then((response) => {
			return response.json();
		}).then((data) => {
			this.setState({pokemon: data});
		});

	}

	//height

	//moves
	//moves -> move -> name
	//moves -> version_group_details -> level_learned_at: 0

	//stats -> base_stat
	//stats -> stat -> name

	//types -> -> type -> name

	//weight

	//Glöm inte key= om man använder map-metoden
	getInfo(){
		if(this.state.pokemon){
			return (
				<>
					<div className="single-image">
						<img className="" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (this.state.pokemon.id) +".png"}/>
					</div>

					<div className="container">
						<h2><b>#</b> {this.state.pokemon.id}</h2>
						<h3><b>Name:</b> {this.state.pokemon.name}</h3>
					</div>

					<div className="types-container container">
					{
						this.state.pokemon.types.map((mType, i) => {
							return <p key={i} className="type-item">{mType.type.name}</p>
						})
					}
					</div>

					<h2>Stats</h2>
					<div className="stats-container container">
					
					{
						this.state.pokemon.stats.map((mStat, i) => {
							return <p pkey={i} fisk="brax" className="stat-item"><b>{mStat.stat.name}:</b> {mStat.base_stat}</p>
						})
					}
					</div>
				</>
			)
		}

		return <p>Loading</p>
	}

	render(){
		return(
			<div className="single-view">
				<Link className="back-btn" to={"/"}>Back</Link>
				{
					this.getInfo()
				}	
			</div>
		);
	}
}
export default withParmas(SingleView);