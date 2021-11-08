import React, { FC, MouseEvent } from 'react';

import { Button } from '../../components/ui/Button/Button';
import { Input } from '../../components/ui/Input/Input';
import { MainLink } from '../../components/ui/Link/Link';
import { Title } from '../../components/ui/Title/Title';

import './Register.scss';

export const Register: FC<Record<string, never>> = () => {
  const handleClick = (e: MouseEvent) => {
    console.log('handleClick', e);
  };

  return (
    <section className="register">
      <div className="register__header">
        <MainLink text="Назад" href="/login" />
        <Title text="Регистрация" />
      </div>
      <form className="register__form" name="registerForm">
        <div className="register__form-input-wrapper">
          <Input name="first_name" label="Имя" placeholder="Введите имя" required />
        </div>
        <div className="register__form-input-wrapper">
          <Input name="second_name" label="Фамилия" placeholder="Введите фамилию" required />
        </div>
        <div className="register__form-input-wrapper">
          <Input name="login" label="Логин" placeholder="Введите логин" required />
        </div>
        <div className="register__form-input-wrapper">
          <Input name="email" label="Email" placeholder="Введите email" required />
        </div>
        <div className="register__form-input-wrapper">
          <Input name="phone" label="Телефон" placeholder="Введите телефон" required />
        </div>
        <Input name="password" label="Пароль" placeholder="Введите пароль" required />

        <div className="register__form-button-wrapper">
          <Button name="register" type="submit" text="Зарегистрироваться" click={handleClick} />
        </div>
      </form>
    </section>
  );
};
