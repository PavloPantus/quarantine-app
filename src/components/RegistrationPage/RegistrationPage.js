/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './RegistrationPage.scss';
import { Form, Message } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/usersReducer';

const RegistrationPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const emailPattern = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');

  const [registrationFormData, setRegistrationFormData] = useState({});
  const [formError, setFormError] = useState({});

  useEffect(() => {
    if (registrationFormData?.firstName?.length < 3) {
      setFormError(data => ({
        ...data,
        firstName: 'длина дожна быть минимум 3 символа',
      }));
    }

    if (registrationFormData?.lastName?.length < 3) {
      setFormError(data => ({
        ...data,
        lastName: 'длина дожна быть минимум 3 символа',
      }));
    }

    if (registrationFormData?.password?.length < 6) {
      setFormError(data => ({
        ...data,
        password: 'длина пароля должна быть больше 6 символов',
      }));
    }

    if (registrationFormData?.passwordRepeat?.length > 0
      && registrationFormData.password !== registrationFormData.passwordRepeat) {
      setFormError(data => ({
        ...data,
        passwordRepeat: 'пароли дожны быть одинаковы',
      }));
    }

    if (typeof (registrationFormData.email) === 'string') {
      if ((registrationFormData.email.match(emailPattern) || []).length === 0) {
        setFormError(data => ({
          ...data,
          email: 'email должен соответствовать примеру - mail@example.com',
        }));
      }
    }
  }, [registrationFormData]);

  const onFormInputChange = (e, { name, value }) => {
    setFormError({});

    setRegistrationFormData(data => ({
      ...data, [name]: value,
    }));
  };

  const onFormSubmit = (e) => {
    dispatch(addUser(
      {
        firstName: registrationFormData.firstName,
        lastName: registrationFormData.lastName,
        password: registrationFormData.password,
        email: registrationFormData.email,
      }
    ));
    history.push('/login');
  };

  return (
    <div className="registraiton">
      <Form
        onSubmit={onFormSubmit}
        success={((
          Object.keys(formError).length === 0
          && Object.keys(registrationFormData).length === 5
        ))}
        error={Object.keys(formError).length > 0}
        className="registration__form"
      >
        <Form.Input
          value={registrationFormData.firstName}
          label="Имя"
          onChange={onFormInputChange}
          placeholder="first Name"
          name="firstName"
          error={formError.firstName || null}
        />

        <Form.Input
          value={registrationFormData.lastName}
          label="Фамилия"
          placeholder="last Name"
          name="lastName"
          onChange={onFormInputChange}
          error={formError.lastName || null}
        />

        <Form.Input
          value={registrationFormData.password}
          error={
            formError.password || null
          }
          label="Пароль"
          name="password"
          type="password"
          onChange={onFormInputChange}
        />

        <Form.Input
          value={registrationFormData.passwordRepeat}
          error={
            formError.passwordRepeat || null
          }
          label="Повторите пароль"
          name="passwordRepeat"
          type="password"
          onChange={onFormInputChange}
        />

        <Form.Input
          value={registrationFormData.email}
          error={
            formError.email || null
          }
          type="email"
          onChange={onFormInputChange}
          label="Email"
          placeholder="mail@example.com"
          name="email"

        />

        <Message
          success
          header="все готово!"
          // content="You're all signed up for the newsletter"
        />

        <Message
          error
          header="ошибка"
          content="форма заполнена с ошибками"
        />
        <Form.Button
          disabled={
            !((
              Object.keys(formError).length === 0
            && Object.keys(registrationFormData).length === 5
            ))
          }
          content="Зарегистрироваться"
        />

      </Form>

    </div>
  );
};

export default RegistrationPage;
