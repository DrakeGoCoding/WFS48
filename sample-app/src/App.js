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
                <Route path="/SignIn">
                    <SignIn />
                </Route>

                <Route path="/SignUp">
                    <SignUp />
                </Route>

                <Route path="/">
                    <Main />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
