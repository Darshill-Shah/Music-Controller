import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormGroup } from "@material-ui/core";
export default class HomePage extends Component {
  defaultVotes = 2;
  constructor(props) {
    super(props);
    this.state = {
      guestCanPause: true,
      votesToSkip: this.defaultVotes,
    };
    this.handleRoomButtomPressed = this.handleRoomButtomPressed.bind(this);
    this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
    this.handleVotesChanged = this.handleVotesChanged.bind(this);
  }

  handleVotesChanged(e) {
    this.setState({
      votesToSkip: Number(e.target.value),
    });
  }

  handleGuestCanPauseChange(e) {
    this.setState({
      guestCanPause: e.target.value === "true" ? true : false,
    });
  }

  handleRoomButtomPressed() {
    // console.log(this.state);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        votes_to_skip: this.state.votesToSkip,
        guest_can_pause: this.state.guestCanPause,
      }),
    };
    // console.log(requestOptions);
    fetch("/api/create-room", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h4" variant="h4">
            {" "}
            Create A Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl component="fieldset">
            <FormHelperText>
              <div align="center"> Guest Control of Playback state</div>
            </FormHelperText>
            <RadioGroup row defaultValue="true">
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Play/Pause"
                labelPlacement="bottom"
                onChange={this.handleGuestCanPauseChange}
              />
              <FormControlLabel
                value="false"
                control={<Radio color="secondary" />}
                label="No control"
                labelPlacement="bottom"
                onChange={this.handleGuestCanPauseChange}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl>
            <FormHelperText>
              <div align="center">Votes Required to skip a song</div>
            </FormHelperText>
            <TextField
              required={true}
              type="number"
              defaultValue={this.defaultVotes}
              inputProps={{
                min: 1,
                style: {
                  textAlign: "center",
                },
              }}
              onChange={this.handleVotesChanged}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            color="secondary"
            variant="outlined"
            onClick={this.handleRoomButtomPressed}
          >
            Create A Room
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="primary" variant="outlined" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    );
  }
}

// export default function CreateRoomPage() {
//   return <p>This is the CreateRoomPage from Function</p>;
// }
