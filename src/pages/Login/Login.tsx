import React, { FC, MouseEvent } from 'react';

import { Button } from '../../components/ui/Button/Button';
import { Input } from '../../components/ui/Input/Input';
import { MainLink } from '../../components/ui/Link/Link';
import { Title } from '../../components/ui/Title/Title';

import './Login.scss';

export const Login: FC<Record<string, never>> = () => {
  const handleLogin = (e: MouseEvent) => {
    console.log('handleLogin', e);
  };

  return (
    <section className="login">
      <div className="login__header">
        <Title text="Авторизация" />
        <MainLink text="Регистрация" href="/register" />
      </div>
      <form className="login__form" name="loginForm">
        <div className="login__form-input-wrapper">
          <Input name="login" label="Логин" placeholder="Введите логин" required />
        </div>
        <Input name="password" label="Пароль" placeholder="Введите пароль" required />

        <div className="login__form-button-wrapper">
          <Button name="login" type="submit" text="Войти" click={handleLogin} />
        </div>
      </form>
      <div className="login__link-wrapper">
        <MainLink text="Вернуться на главную" href="/" />
      </div>
    </section>
  );
};
