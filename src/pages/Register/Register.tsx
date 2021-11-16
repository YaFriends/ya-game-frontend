import React, { FC, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SignUpData } from '../../api/AuthAPI';
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
import './Register.scss';

export const Register: FC<Record<string, never>> = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { isAuth } = useAuth();

  if (isAuth) {
    history.push('/');
  }

  const initSignUpData = {
    first_name: '',
    second_name: '',
    login: '',
    email: '',
    phone: '',
    password: '',
  };
  const [form, setForm] = useState<SignUpData>(initSignUpData);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    AuthController.signUp(form).then(response => dispatch(authActions.setCurrentUser(response)));
  };

  const handleChange = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    const name = input.name;
    const value = input.value;

    setForm({ ...form, [name]: value });
  };

  return (
    <section className="register">
      <div className="register__header">
        <MainLink text="Назад" href="/login" />
        <Title text="Регистрация" />
      </div>
      <Form name="registerForm" submit={handleSubmit}>
        <div>
          <Input
            name="first_name"
            label={TRANSLATION.Register.inputFirstNameLabel}
            placeholder={TRANSLATION.Register.inputFirstNamePlaceholder}
            required
            change={handleChange}
          />
          <Input
            name="second_name"
            label={TRANSLATION.Register.inputSecondNameLabel}
            placeholder={TRANSLATION.Register.inputSecondNamePlaceholder}
            required
            change={handleChange}
          />
          <Input
            name="login"
            label={TRANSLATION.Register.inputLoginLabel}
            placeholder={TRANSLATION.Register.inputLoginPlaceholder}
            required
            change={handleChange}
          />
          <Input
            name="email"
            label={TRANSLATION.Register.inputEmailLabel}
            placeholder={TRANSLATION.Register.inputEmailPlaceholder}
            required
            change={handleChange}
          />
          <Input
            name="phone"
            label={TRANSLATION.Register.inputPhoneLabel}
            placeholder={TRANSLATION.Register.inputPhonePlaceholder}
            required
            change={handleChange}
          />
          <Input
            name="password"
            type="password"
            label={TRANSLATION.Register.inputPasswordLabel}
            placeholder={TRANSLATION.Register.inputPasswordPlaceholder}
            required
            change={handleChange}
          />
        </div>
        <div className="register__button">
          <Button
            name="button-register"
            type="submit"
            text={TRANSLATION.Register.submitButtonText}
          />
        </div>
      </Form>
    </section>
  );
};
