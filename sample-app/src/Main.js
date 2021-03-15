import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    componentDidMount() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        currentUser ? this.setState({ currentUser }) : this.redirectSignIn();
    }

    handleRouter = (url) => {
        this.props.history.push(url);
    }

    redirectSignIn = () => {
        localStorage.removeItem('currentUser');
        this.handleRouter('/SignIn');
    }

    render() {
        return (
            this.state.currentUser
                ? <div>
                    Hi, {this.state.currentUser.name} <br />
                    <button onClick={this.redirectSignIn}>Log Out</button>
                </div>
                : <div>
                    404
                </div>
        )
    }
}

export default withRouter(Main);
