import './App.css';
import UsersList from "./components/users/UsersLists/UsersList";
import Home from "./components/home/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <div className="app-links">
                <div className='app-link'><Link to={'/'}>Home</Link></div>
                <div className='app-link'><Link to={'/users'}>Users</Link></div>
            </div>
            <Switch>
                <Route exact path={'/'} render={() => <Home/>}/>
                <Route path={'/users'} component={UsersList}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
