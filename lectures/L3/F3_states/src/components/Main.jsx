import { Component } from 'react';

class Main extends Component{
  
  constructor(props){
   super(props);
  
   let {r, g, b} = this.props;
   
   this.state = {
    red: r,
    green: g,
    blue: b
   }
   this.state.time = 0;
   this.state.showTime = true;

   this.startTimer();
   console.log(this.props, this.state);
  }

  startTimer = () =>{
    setInterval(() => {
      this.setState(prevState => (
        {
          time: prevState.time + 1
        }
      ));

      this.randomColor();
    }, 1000);
  }

    
  randomColor = () => {
    this.red = Math.floor(Math.random() * 255);
    this.green = Math.floor(Math.random() * 255);
    this.blue = Math.floor(Math.random() * 255);

    
    this.setState(
      {
          red: this.red,
          green: this.green,
          blue: this.blue
      }
    );

    }


  render() {
    console.log("Nu körs render!");
    let css = {
      height: 300 + "px",
      backgroundColor: "rgb(" + this.state.red + ", " + this.state.green + ", " + this.state.blue + ")"
    }
     return (
      <>
        <main style={css}>
          <p>
            Detta är main
          </p>
          {this.state.showTime && <p>Detta är en timer {this.state.time}</p>}
          <button onClick={this.randomColor}>Byt färg</button>

        </main>
      </>

     );
  }
}



export default Main;