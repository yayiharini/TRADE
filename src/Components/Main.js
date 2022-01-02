import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import About from './About';
import HomePage from './HomePage';


function Main() {
    return (
        <BrowserRouter>
            <div>
                <Route path='/' component={HomePage} />
                <Route path='/about' component={About} />
            </div>
        </BrowserRouter>


    );
}
export default Main
