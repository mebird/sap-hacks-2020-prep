import React, { Component } from 'react';
import { AppBar, IconButton, Button, Grid } from '@material-ui/core'
import { MenuRounded } from "@material-ui/icons"

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { showSubMenu: false, showMenu: false }
    }

    render() {
        return (
            <AppBar position="sticky">
                <IconButton edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={
                        () => this.setState((prev) => ({ showMenu: !prev.showMenu, showSubMenu: !prev.showMenu && prev.showSubMenu }))}>
                    <MenuRounded />
                </IconButton>
                {this.menuBody()}
                {this.apiMenu()}
            </AppBar>
        );
    }

    menuBody = () => {
        if (!this.state.showMenu) return null;
        const rootUrl = window.location.origin;
        return (<Grid container justify="center">
            <Button color="inherit" onClick={() => this.setState({ showSubMenu: true })}>API Implementations</Button>
            <Button color="inherit" onClick={() => this.setState({ showSubMenu: false })} href={`${rootUrl}/`}>UI Fun :)</Button>
        </Grid>)
    }

    apiMenu = () => {
        if (!this.state.showMenu || !this.state.showSubMenu) return null;
        return this.renderSubMenu([{
            path: "cards",
            name: "Cards Integration"
        },
        {
            path: "nasa",
            name: "NASA Search"
        },
        {
            path: "maps",
            name: "Google Maps"
        }
        ])
    }

    renderSubMenu = (children) => {
        const rootUrl = window.location.origin;
        return (
            <AppBar position="static" color="secondary">
                {children.map(c => <Button href={`${rootUrl}/${c.path}`}>{c.name}</Button>)}
            </AppBar>
        )
    }
}