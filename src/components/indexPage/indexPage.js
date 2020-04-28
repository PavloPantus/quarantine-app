import React from 'react';
import { Link } from 'react-router-dom';
import './indexPage.scss';

const IndexPage = () => (
  <>
    <div className="authorization">
      <Link className="authorization__link" to="/registration">
          Регистрация
      </Link>

      <Link className="authorization__link" to="/login">
          Войти
      </Link>
    </div>
  </>
);

export default IndexPage;
