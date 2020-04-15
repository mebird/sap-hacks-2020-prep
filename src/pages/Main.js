import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player';

export class MainPage extends Component {

    render() {
        return (
            <Grid container>
                <Grid item>
                    <ReactPlayer url="https://www.youtube.com/watch?v=pvuN_WvF1to" />
                </Grid>
                <div>
                    <Grid item>
                        <img src='/concur.png' alt="the best logo" height="50%" />
                        <Typography>Maja Evans, Nick Wong, Sam Ip, and Alice Kim</Typography>
                    </Grid>
                </div>
            </Grid>);
    }
}