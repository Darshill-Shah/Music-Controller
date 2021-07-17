import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

// export default class HomePage extends Component {
//     constructor(props){
//         super(props);
//     }

//     render() {
//         return <p>This is the home page</p>
//     }
// }

export default function HomePage() {
  return (
    <Router>
      <Switch>
        <Route path="/join" component={RoomJoinPage} />
        <Route path="/create" component={CreateRoomPage} />
        <Route exact path="/">
          <p>This is the Home Page</p>
        </Route>
      </Switch>
    </Router>
  );
}
