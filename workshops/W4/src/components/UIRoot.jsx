import { Component  } from "react";
import Header from "./Header";
import ReactionContainter from "./ReactionContainer";
import {Routes, Route} from "react-router-dom";
import SingleView from "./SingleView";
import NotFound from "./NotFound";


class UIRoot extends Component {

  getReactionContainer = () => {
      return <ReactionContainter/>
  }

  render() {

    return (<>
        <Header />
        <Routes>
          <Route path="/" element={this.getReactionContainer()} />
          <Route path="/view/:id" element={<SingleView abc="123"/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </>);
  }
}

export default UIRoot;