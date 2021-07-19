import React, { Component } from "react";

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votesToSkip: 3,
      guestCanPause: false,
      isHost: false,
    };
    this.roomCode = this.props.match.params.roomCode;
    this.getRoomDetails();
  }

  getRoomDetails() {
    fetch("/api/get-room" + "?code=" + this.roomCode)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          votesToSkip: data.votes_to_skip,
          guestCanPause: data.guest_can_pause.toString(),
          isHost: data.is_host.toString(),
        });
      });
  }

  render() {
    // return <p>This is the home page</p>;
    return (
      <div>
        <h2>Room: {this.roomCode}</h2>
        <p>votesToSkip: {this.state.votesToSkip}</p>
        <p>guestCanPause: {this.state.guestCanPause}</p>
      </div>
    );
  }
}

// export default function RoomJoinPage() {
//   return <p>This is the RoomJoinPage from Function</p>;
// }
