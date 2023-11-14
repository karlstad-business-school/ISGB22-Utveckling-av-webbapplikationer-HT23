import { Component  } from "react";
import Header from "./Header";
import ReactionContainter from "./ReactionContainer";

class UIRoot extends Component {

  render() {

    return (<>
        <Header />
        <ReactionContainter />
    </>);
  }
}

export default UIRoot;