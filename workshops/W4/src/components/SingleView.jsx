import { Component } from "react";
import "./SingleView.css";
import { Link, useParams } from "react-router-dom";

function withParams(Component){
    return props => <Component {...props} params={useParams()} />
}

class SingleView extends Component{
    constructor(props){
        super(props);

        console.log(this.props);
    }

    render(){
        return(
            <div className="single-view">
                <Link className="back-btn" to="/">Back</Link>
                <h4>ID: {this.props.params.id}</h4>
            </div>

        )
    }
}

export default withParams(SingleView);