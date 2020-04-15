import React, { Component } from 'react';
import { AppBar, IconButton } from '@material-ui/core'
import { Menu } from "@material-ui/icons"

export class Header extends Component {

    render() {
        return (
            <AppBar position="static">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
            </AppBar>
        );
    }
}