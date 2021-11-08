import React, { FC, MouseEvent } from 'react';

import { Button } from '../components/ui/Button/Button';
import { Input } from '../components/ui/Input/Input';
import { MainLink } from '../components/ui/Link/Link';
import { Title } from '../components/ui/Title/Title';

export const Login: FC<Record<string, never>> = () => {
  const handleClick = (e: MouseEvent) => {
    console.log('handleClick', e);
  };

  return (
    <section className="h-screen w-[354px] mx-auto flex items-center justify-center flex-col">
      <div className="w-full flex items-center justify-between mb-6">
        <Title text="Авторизация" />
        <MainLink text="Регистрация" href="/register" />
      </div>
      <form className="w-full" name="authForm">
        <div className="mb-6">
          <Input name="login" label="Логин" placeholder="Введите логин" required />
        </div>
        <Input name="password" label="Пароль" placeholder="Введите пароль" required />

        <div className="mt-14">
          <Button name="auth" type="submit" text="Войти" click={handleClick} />
        </div>
      </form>
      <div className="w-full flex items-center justify-center mt-4">
        <MainLink text="Вернуться на главную" href="/" />
      </div>
    </section>
  );
};
