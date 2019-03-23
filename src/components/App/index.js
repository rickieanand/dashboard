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

    }, [authUser])
    return (
        < MuiThemeProvider theme={theme} >
            <CssBaseline />
            <Router>
                <Switch>
                    <Route exact path='/' render={(props) => (<Homepage authUser={authUser} {...props} />)} />
                    <Route exact path='/register' render={(props) => (<Register authUser={authUser} {...props} />)} />
                    <Route exact path='/login' render={(props) => (<Login authUser={authUser} {...props} />)} />
                    <Route exact path='/dashboard' render={(props) => (<Dashboard authUser={authUser} {...props} />)} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    )
}

export default App
