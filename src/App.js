/* eslint-disable max-len */
import React from 'react';
import './App.scss';
import {
  HashRouter, Route, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import store from './store/store';
import IndexPage from './components/indexPage/indexPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisteredNotesPage from './components/RegisteredNotesPage/RegisteredNotesPage';

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/registration" component={RegistrationPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/registered-notes" component={RegisteredNotesPage} />

        </Switch>
      </div>
    </HashRouter>
  </Provider>

);

export default App;
