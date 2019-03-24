import React, { useState, useEffect } from 'react';
import Homepage from '../Homepage';
import Dashboard from '../Dashboard';
import Register from '../Register';
import Login from '../Login';
import fire from '../../fire'

/*components required to use material-ui*/
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

/*required components for routing*/
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*default material-ui theme generation*/
const theme = createMuiTheme()


const App = (props) => {
    const [authUser, setAuthUser] = useState('')

    useEffect(() => {
        fire.auth()
            .onAuthStateChanged(authUser => {
                authUser
                    ? setAuthUser(authUser)
                    : setAuthUser({ authUser: null })
            })
        console.log('authUser:', authUser)

    }, [])
    return (
        < MuiThemeProvider theme={theme} >
            <CssBaseline />
            <Router>
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/dashboard' component={Dashboard} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    )
}

export default App
