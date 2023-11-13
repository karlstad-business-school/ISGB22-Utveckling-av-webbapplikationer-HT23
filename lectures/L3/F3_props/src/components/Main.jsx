import { Component } from 'react';

class Main extends Component{


  constructor(props){
    super(props);

    let {r, g, b} = this.props;
    this.setColor(r, g, b);
    console.log(r, g, b);
  }


  setColor(r, g, b){
    this.red = r;
    this.green = g;
    this.blue = b;
  }
 

  render() {
    let css = {
      height: 300 + "px",
      backgroundColor: "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")"
    }

    return (
      <>
        <main style={css}>Detta är main</main>
      </>

    );
  }
}

export default Main;