import React, { useEffect, useState } from 'react';
import './RegistrationPage.scss';
import { Form, Message } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const RegistrationPage = () => {
  const history = useHistory();

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

    console.log('error checking');
    if (registrationFormData.email) {
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
    history.push('/login');
  };

  return (
    <div className="registraiton">
      <Form
        onSubmit={onFormSubmit}
        success={false}
        error={Object.keys(formError).length > 0}
        className="registration__form"
      >
        <Form.Input
          label="first Name"
          onChange={onFormInputChange}
          placeholder="first Name"
          name="firstName"
          error={formError.firstName || null}
        />

        <Form.Input
          label="last Name"
          placeholder="last Name"
          name="lastName"
          onChange={onFormInputChange}
          error={formError.lastName || null}
        />

        <Form.Input
          error={
            formError.password || null
          }
          label="password"
          name="password"
          type="password"
          onChange={onFormInputChange}
        />

        <Form.Input
          error={
            formError.passwordRepeat || null
          }
          label="repeat password"
          name="passwordRepeat"
          type="password"
          onChange={onFormInputChange}
        />

        <Form.Input
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
          header="Form Completed"
          content="You're all signed up for the newsletter"
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
          content="Submit"
        />

      </Form>

    </div>
  );
};

export default RegistrationPage;
