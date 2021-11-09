import React, { FC, MouseEvent } from 'react';

import { ButtonProps } from '../../components/ui/Button/Button';
import { Form } from '../../components/ui/Form/Form';
import { InputProps } from '../../components/ui/Input/Input';
import { MainLink } from '../../components/ui/Link/Link';
import { Title } from '../../components/ui/Title/Title';
import './Login.scss';
import { TRANSLATION } from '../../lang/ru/translation';

export const Login: FC<Record<string, never>> = () => {
  const handleLogin = (e: MouseEvent) => {
    console.log('handleLogin', e);
  };
  const inputs: InputProps[] = [
    {
      name: 'input-login',
      label: TRANSLATION.Login.inputLoginLabel,
      placeholder: TRANSLATION.Login.inputLoginPlaceholder,
      required: true,
    },
    {
      name: 'input-password',
      label: TRANSLATION.Login.inputPasswordLabel,
      placeholder: TRANSLATION.Login.inputPasswordPlaceholder,
      required: true,
    },
  ];
  const button: ButtonProps = {
    type: 'submit',
    name: 'button-login',
    text: TRANSLATION.Login.submitButtonText,
    click: handleLogin,
  };

  return (
    <section className="login">
      <div className="login__header">
        <Title text={TRANSLATION.Login.title} />
        <MainLink text={TRANSLATION.Login.linkToRegisterText} href="/register" />
      </div>
      <Form name="loginForm" inputs={inputs} button={button} />
      <div className="login__link">
        <MainLink text={TRANSLATION.Login.linkToDashboardText} href="/" />
      </div>
    </section>
  );
};
