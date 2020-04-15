import React, { Component } from 'react';
import { Grid, Typography, Slider } from '@material-ui/core';
import ReactPlayer from 'react-player';

export class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 100,
            opacity: 100
        }
    }

    render() {
        console.log(this.state);
        return (
            <Grid container>
                <Grid item>
                    <Typography>Maja Evans, Nick Wong, Sam Ip, and Alice Kim</Typography>

                    <ReactPlayer url="https://www.youtube.com/watch?v=pvuN_WvF1to" />
                </Grid>
                <Grid container>
                    <img src='/concur.png' alt="the best logo"
                        style={{
                            height: `${this.state.size}%`,
                            width: `${this.state.size}%`,
                            opacity: this.state.opacity / 100
                        }} />
                </Grid>
                <Grid container>
                    <Slider defaultValue={100}
                        aria-labeledby={"size-slider"}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={100}
                        onChange={(event, value) => this.setState({ size: value })} />
                    <Typography id="size-slider" gutterBottom>
                        Image Size
                    </Typography>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Slider defaultValue={100}
                            aria-labeledby={"seen-slider"}
                            valueLabelDisplay="auto"
                            step={10}
                            marks
                            min={0}
                            max={100}
                            onChange={(event, value) => this.setState({ opacity: value })} />
                        <Typography id="seen-slider" gutterBottom>
                            Image Visibility
                    </Typography>
                    </Grid>
                </Grid>
            </Grid>);
    }
}