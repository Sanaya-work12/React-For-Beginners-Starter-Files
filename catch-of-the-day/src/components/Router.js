import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import StorePicker from './StorePicker'; //specify path so the react knows where the file is.
import App from './App';
import NotFound from './NotFound';
import "../css/style.css";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;