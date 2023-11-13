import { Component } from 'react';

class Header extends Component{

  render() {
      return (
        <>
          <header> <h1>React.js! Tiden är: { Date.now() } </h1></header>
        </>
      );
  }
}

export default Header;