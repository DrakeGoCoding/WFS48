import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Main extends Component {
    handleRouter = (url) => {
        this.props.history.push(url);
    }

    redirectSignIn = () => {
        this.handleRouter('/SignIn');
    }

    redirectSignUp = () => {
        this.handleRouter('/SignUp');
    }

    render() {
        return (
            <div>
                <button onClick={this.redirectSignIn}>Sign In</button>
                <button onClick={this.redirectSignUp}>Sign Up</button>
            </div>
        )
    }
}

export default withRouter(Main);
