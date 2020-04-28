import React from 'react';
import './App.scss';
import {
  BrowserRouter, Link, Route, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import store from './store/store';
import IndexPage from './components/indexPage/indexPage';
import LoginPage from './components/LoginPage/LoginPage';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route path="/login" component={LoginPage} />

        </Switch>
      </div>
    </BrowserRouter>
  </Provider>

);

export default App;
