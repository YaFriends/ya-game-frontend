import React, { FC, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { LoginData } from '../../api/AuthAPI';
import { Button } from '../../components/ui/Button/Button';
import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';
import { MainLink } from '../../components/ui/Link/Link';
import { Title } from '../../components/ui/Title/Title';
import { AuthController } from '../../controllers/AuthController';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/use-auth';
import { TRANSLATION } from '../../lang/ru/translation';
import { authActions } from '../../store/slices/authSlice';
import './Login.scss';

export const Login: FC<Record<string, never>> = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { isAuth } = useAuth();

  if (isAuth) {
    history.push('/');
  }

  const initLoginData = {
    login: '',
    password: '',
  };
  const [form, setForm] = useState<LoginData>(initLoginData);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    AuthController.login(form).then(response => dispatch(authActions.setCurrentUser(response)));
  };

  const handleChange = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    const name = input.name;
    const value = input.value;

    setForm({ ...form, [name]: value });
  };

  return (
    <section className="login">
      <div className="login__header">
        <Title text={TRANSLATION.Login.title} />
        <MainLink text={TRANSLATION.Login.linkToRegisterText} href="/register" />
      </div>
      <Form name="loginForm" submit={handleSubmit}>
        <div>
          <Input
            name="login"
            label={TRANSLATION.Login.inputLoginLabel}
            placeholder={TRANSLATION.Login.inputLoginPlaceholder}
            required
            change={handleChange}
          />
          <Input
            name="password"
            type="password"
            label={TRANSLATION.Login.inputPasswordLabel}
            placeholder={TRANSLATION.Login.inputPasswordPlaceholder}
            required
            change={handleChange}
          />
        </div>
        <div className="login__button">
          <Button name="button-login" type="submit" text={TRANSLATION.Login.submitButtonText} />
        </div>
      </Form>
      <div className="login__link">
        <MainLink text={TRANSLATION.Login.linkToDashboardText} href="/main" />
      </div>
    </section>
  );
};
