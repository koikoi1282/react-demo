import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom"
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import { Navbar } from './component/navbar';
import { Container } from './component/container';
import { Dashboard } from './component/dashboard';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Container>
      {/* <Route path='/' component={this} /> */}
      <Route path='/dashboard' component={Dashboard} />
    </Container >
  </BrowserRouter>,
  document.getElementById('root')
  // <h1>Hello, World! </h1>, 
  // document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
