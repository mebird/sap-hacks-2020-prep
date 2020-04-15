import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Button,
    Container,
    FormControl,
    TextField,
    Card,
    CardHeader,
    CardMedia,
    Select,
    MenuItem,
    InputLabel,
} from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100%'
    },
    button: {
        width: '100%'
    },
    card: {
        maxWidth: 345,
        margin: '20px auto'
    },
    media: {
        height: 200,
        width: 200,
        borderRadius: '50%',
        margin: '20px auto',
    },
});

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorMessage: '',
            isLoaded: false,
            items: [],
            numItems: 10,
            query: '',
        };
    }

    search = () => {
        const { query } = this.state;
        if (query === '') {
            this.setState({
                isLoaded: false,
                error: true,
                errorMessage: 'No empty string!'
            });
        } else {
            fetch(`https://images-api.nasa.gov/search?q=${query}`)
                .then(res => res.json())
                .then((result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.collection.items,
                        error: false,
                        errorMessage: ''
                    });
                }, (error) => {
                    this.setState({
                        isLoaded: true,
                        error: true,
                        errorMessage: error,
                    });
                });
        }
    }

    render() {
        const { classes } = this.props;
        const { query, items, numItems, error, errorMessage } = this.state;
        return <Container className={classes.container}>
            <FormControl className={classes.formControl}>
                <TextField label="Search for NASA Images and Videos" value={query} error={error} helperText={errorMessage} onChange={event => this.setState({ query: event.target.value })} />
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="nums-of-images"># of Images</InputLabel>
                <Select
                    labelId="nums-of-images"
                    value={numItems}
                    onChange={event => this.setState({ numItems: event.target.value })}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <Button className={classes.button} onClick={this.search}>Search</Button>
            <Container className={classes.container}>
                {items && items.slice(0, numItems).map((item, i) =>
                    <Card key={i} className={classes.card}>
                        <CardHeader
                            title={item.data[0].title || ''}
                            subheader={item.data[0].description || ''}
                        />
                        {item.links && item.links.map((link, j) =>
                            <CardMedia
                                key={j}
                                className={classes.media}
                                image={link.href}
                            />
                        )}
                    </Card>
                )}
            </Container>
        </Container>;
    }
}

export default withStyles(styles)(SearchPage);
