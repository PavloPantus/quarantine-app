import React, { useState } from 'react';
import './LoginPage.scss';
import { Form, Message } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCurrentUser, usersSelector } from '../../store/usersReducer';

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const users = useSelector(usersSelector);

  const [userData, setUserData] = useState({
    email: '', password: '',
  });
  const [enterError, setEnterError] = useState('');

  const onFormInputChange = (e, { name, value }) => {
    setUserData(data => ({
      ...data, [name]: value,
    }));
  };

  const onFormSubmit = (e) => {
    if (users.find(user => (
      user.email === userData.email
      && user.password === userData.password
    ))) {
      dispatch(setCurrentUser(userData.email));
      history.push('/registered-notes');
    } else {
      // eslint-disable-next-line max-len
      setEnterError('возможно вы не зарегистрированы или логин и пароль введены не верно повторите попытку');
    }
  };

  return (
    <div className="login">

      <Form
        onSubmit={onFormSubmit}
        error={!!enterError}
      >
        <Form.Input
          value={userData.email}
          label="email"
          placeholder="mail@example.com"
          name="email"
          onChange={onFormInputChange}
        />

        <Form.Input
          value={userData.password}
          label="Пароль"
          type="password"
          name="password"
          onChange={onFormInputChange}
        />

        <Message
          error
          header="ошибка"
          content={enterError}
        />
        <Form.Button
          disabled={false}
          content="войти"
        />

      </Form>

    </div>
  );
};

export default LoginPage;
