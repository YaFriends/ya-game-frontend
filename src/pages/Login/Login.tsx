import React, { FC, FormEvent } from 'react';

import { Button } from '../../components/ui/Button/Button';
import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';
import { MainLink } from '../../components/ui/Link/Link';
import { Title } from '../../components/ui/Title/Title';
import './Login.scss';
import { TRANSLATION } from '../../lang/ru/translation';

export const Login: FC<Record<string, never>> = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit', e);
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
            name="input-login"
            label={TRANSLATION.Login.inputLoginLabel}
            placeholder={TRANSLATION.Login.inputLoginPlaceholder}
            required
          />
          <Input
            name="input-password"
            label={TRANSLATION.Login.inputPasswordLabel}
            placeholder={TRANSLATION.Login.inputPasswordPlaceholder}
            required
          />
        </div>
        <div className="login__button">
          <Button name="button-login" type="submit" text={TRANSLATION.Login.submitButtonText} />
        </div>
      </Form>
      <div className="login__link">
        <MainLink text={TRANSLATION.Login.linkToDashboardText} href="/" />
      </div>
    </section>
  );
};
