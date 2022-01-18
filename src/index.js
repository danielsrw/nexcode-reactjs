import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Home from './Home';
import About from './About';
import Team from './Team';
import Blog from './Blog';
import Portfolio from './Portfolio';

import Seo from './services/Seo';
import Ppc from './services/Ppc';
import WebDesign from './services/WebDesign';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/home' render={ (props) => <Home { ...props } /> } />
            <Route path='/about' render={ (props) => <About { ...props } /> } />
            <Route path='/team' render={ (props) => <Team { ...props } /> } />
            <Route path='/blog' render={ (props) => <Blog { ...props } /> } />
            <Route path='/portfolio' render={ (props) => <Portfolio { ...props } /> } />

            <Route path='/services/seo' render={ (props) => <Seo { ...props } /> } />
            <Route path='/services/ppc' render={ (props) => <Ppc { ...props } /> } />
            <Route path='/services/web-design' render={ (props) => <WebDesign { ...props } /> } />
            <Redirect from="/" to="/home" />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
