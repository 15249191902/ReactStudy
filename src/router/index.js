import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom'
import Home from "../pages/home/Home.js"
import Message from "../pages/Message.js"
import Detail from "../pages/Detail.js"
export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <NavLink to="Message" activeClassName="hurray">Message</NavLink>
                <NavLink to="Detail" activeClassName="hurray">Detail</NavLink>
                <Switch>
                    <Route path="/Message">
                        <Message />
                    </Route>
                    <Route path="/Detail">
                        <Detail />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}