import React, { FC, MouseEvent } from 'react';

import { Button } from '../../components/ui/Button/Button';
import { Input } from '../../components/ui/Input/Input';
import { MainLink } from '../../components/ui/Link/Link';
import { Title } from '../../components/ui/Title/Title';

import './Login.scss';

import { TRANSLATION } from '../../lang/ru/translation';

export const Login: FC<Record<string, never>> = () => {
  const handleLogin = (e: MouseEvent) => {
    console.log('handleLogin', e);
  };

  return (
    <section className="login">
      <div className="login__header">
        <Title text={TRANSLATION.Login.title} />
        <MainLink text={TRANSLATION.Login.linkToRegisterText} href="/register" />
      </div>
      <form className="login__form" name="loginForm">
        <div className="login__form-input-wrapper">
          <Input
            name="login"
            label={TRANSLATION.Login.inputLoginLabel}
            placeholder={TRANSLATION.Login.inputLoginPlaceholder}
            required
          />
        </div>
        <Input
          name="password"
          label={TRANSLATION.Login.inputPasswordLabel}
          placeholder={TRANSLATION.Login.inputPasswordPlaceholder}
          required
        />

        <div className="login__form-button-wrapper">
          <Button
            name="login"
            type="submit"
            text={TRANSLATION.Login.submitButtonText}
            click={handleLogin}
          />
        </div>
      </form>
      <div className="login__link">
        <MainLink text={TRANSLATION.Login.linkToDashboardText} href="/" />
      </div>
    </section>
  );
};
