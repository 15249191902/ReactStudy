import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'
// import Home from "../pages/home/Home.js"
// import Message from "../pages/Message.js"
// import Detail from "../pages/Detail.js"
import {mainRouter} from "./routerConfig.js"
export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {
                      mainRouter.map(item => {
                        return <Route key={item.path} component={item.component} path={item.path} exact={item.exact}></Route>
                      })
                    }
                </Switch>
                
            </BrowserRouter>
        </div>
    )
}