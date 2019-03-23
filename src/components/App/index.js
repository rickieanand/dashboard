import React from 'react';
import Homepage from '../Homepage';
import Dashboard from '../Dashboard';
import Register from '../Register';
import Login from '../Login';

/*components required to use material-ui*/
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

/*required components for routing*/
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*default material-ui theme generation*/
const theme = createMuiTheme()


export const App = props => (
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
            <Switch>
                {/* Routing according to the path entered */}
                <Route exact path='/' component={Homepage} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
        </Router>
    </MuiThemeProvider>
)

export default App
