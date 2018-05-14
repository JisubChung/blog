import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import injectSheet, { ThemeProvider } from 'react-jss';
import theme from 'lib/theme';
import history from 'lib/history';
import routes from 'router/routes';

const globalStyles = {
    '@global': {
        html: {
            height: '100%'
        },
        body: {
            height: '100%',
            margin: 0,
            padding: 0,
            fontFamily: 'sans-serif',
            overflow: 'scroll'
        }
    }
};

@injectSheet(globalStyles)
class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router history={history}>{routes}</Router>
            </ThemeProvider>
        );
    }
}

export default App;
