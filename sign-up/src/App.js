import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import SignUp from './SignUp';
import SignIn from './SignIn';
import Main from './Main';

import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>

                <Route path="/SignIn">
                    <SignIn />
                </Route>

                <Route path="/SignUp">
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
