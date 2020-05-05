import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
class RouterRoot extends  React.Component {
    render () {
        return (
            <Router>
                {/* <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/topics">Topics</Link> */}
                <Switch>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/topics">
                        <Topics></Topics>
                    </Route>
                    <Route path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
function Home () {
    return  <h2>Home</h2>
}
function About () {
    return <h2>About</h2>
}
function Topics () {
    let match = useRouteMatch();
    console.log(match);
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>Component</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic></Topic>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    )
}
function Topic () {
    let {topicId} = useParams();
    let match = useRouteMatch();
    console.log(match)
    return <h3>Requested topic Id: {topicId}</h3>
}
export default RouterRoot