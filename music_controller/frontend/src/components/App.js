import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";


// export default class App extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <h1>Testing React Code by {self.props.name}</h1>
//         )
//     }
// }

export default function App(props) {
    return (
        <div>
        <h1>Testing React Code - {props.name}</h1>
        <HomePage />
        </div>
    )
}

const appDiv = document.getElementById("app");
render(<App name="Darshil" />, appDiv);