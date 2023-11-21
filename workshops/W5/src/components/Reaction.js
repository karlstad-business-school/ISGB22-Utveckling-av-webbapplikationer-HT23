import React, {Component} from "react";
import { Link } from "react-router-dom";

class Reaction extends Component{
	render(){
		let {image, name, url, id} = this.props;
		return(
			<div className="pokemon-card">
				<img className="pokemon-card-image" src={image}/>
				<p className="pokemon-card-id"># {id}</p>
				<p className="pokemon-card-name">{name}</p>
				<Link className="pokemon-card-view" to={"/view/"+id}>View</Link>
			</div>
		);
	}
}
/*<button className="pokemon-card-button">Show</button>*/
export default Reaction;