import React, { Component, useState, useEffect } from "react";

// export default class Room extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       votesToSkip: 3,
//       guestCanPause: false,
//       isHost: false,
//     };
//     this.roomCode = this.props.match.params.roomCode;
//     this.getRoomDetails();
//   }

//   getRoomDetails() {
// fetch("/api/get-room" + "?code=" + this.roomCode)
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     this.setState({
//       votesToSkip: data.votes_to_skip,
//       guestCanPause: data.guest_can_pause.toString(),
//       isHost: data.is_host.toString(),
//     });
//   });
//   }

//   render() {
//     // return <p>This is the home page</p>;
//     return (
//       <div>
//         <h2>Room: {this.roomCode}</h2>
//         <p>votesToSkip: {this.state.votesToSkip}</p>
//         <p>guestCanPause: {this.state.guestCanPause}</p>
//       </div>
//     );
//   }
// }

export default function Room(props) {
  const [roomState, setRoomState] = useState({
    votesToSkip: 3,
    guestCanPause: "false",
    isHost: "false",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/get-room" + "?code=" + props.match.params.roomCode)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRoomState({
          votesToSkip: data.votes_to_skip,
          guestCanPause: data.guest_can_pause.toString(),
          isHost: data.is_host.toString(),
        });
        setIsLoading(false);
      })
      .catch(() => {
        setRoomState({
          votesToSkip: "DATA NOT FOUND",
          guestCanPause: "DATA NOT FOUND",
          isHost: "DATA NOT FOUND",
        });
        setIsLoading(false);
      });
  }, [props?.match?.params?.roomCode]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <div>
      <h2>Room: {props.match.params.roomCode}</h2>
      <p>votesToSkip: {roomState.votesToSkip}</p>
      <p>guestCanPause: {roomState.guestCanPause}</p>
      <p>isHost: {roomState.isHost}</p>
    </div>
  );
}
