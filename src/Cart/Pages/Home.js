import React from 'react'
import Header from './Header';
import Body from './Body';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Store from '../Store/Store';
import { Provider } from 'react-redux'
import Cart from './Cart';

const Home = () => {
  return (
    <div>
      <Provider store={Store}>
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Body />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </Router>
        </Provider>
    </div>
  )
}

export default Home