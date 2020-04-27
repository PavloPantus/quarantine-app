import React from 'react';
import './App.scss';
import {
  BrowserRouter,
} from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';

const App = () => (
  <BrowserRouter>
    <div>
      <RegistrationPage />
    </div>
  </BrowserRouter>

);

export default App;
