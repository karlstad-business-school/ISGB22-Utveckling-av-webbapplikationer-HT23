import { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class UIRoot extends Component{

  render() {
      return (
        <>
        <Header/>
        <Main r="255" g="45" b="100"/>
        <Footer/>
        </>
      );
  }
}

export default UIRoot;




