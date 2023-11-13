import { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class UIRoot extends Component{

  render() {
      let colors = {r: 255, g: 45, b: 100}

      return (
        <>
        <Header/>
        <Main {...colors}/>
        <Footer/>
        </>
      );
  }
}

export default UIRoot;




