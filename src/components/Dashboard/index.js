import React from 'react';
import { Redirect } from 'react-router-dom'
import fire from '../../fire'

const Dashboard = (props) => {

    const user = fire.auth().currentUser,
        signOut = () => {
            fire.auth().signOut().then(() => {
                alert('logged out')
            }).catch(function (error) {
                alert(error)
            })
        },
        verify = (email) => {
            fire.auth().sendEmailVerification(email).then(() => {
                alert('check your email')
            }).catch((error) => {
                alert(error)
            })
        }
    if (user) {
        const { email, emailVerified = null } = user
        return (
            <div>
                <h1>Dashboard Component</h1>
                <p onClick={signOut}>Sign out</p>
                {
                    !emailVerified &&
                    <p onClick={() => verify(email)}>Verify email</p>
                }
            </div>
        )
    } else {
        return (
            <Redirect to='/login' />
        )
    }
}

export default Dashboard