import { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class UIRoot extends Component{

  render() {
      return (
        <>
        <Header/>
        <Main/>
        <Footer/>
        </>
      );
  }
}

export default UIRoot;




