import React, { FC, MouseEvent } from 'react';

import { ButtonProps } from '../../components/ui/Button/Button';
import { Form } from '../../components/ui/Form/Form';
import { InputProps } from '../../components/ui/Input/Input';
import { MainLink } from '../../components/ui/Link/Link';
import { Title } from '../../components/ui/Title/Title';
import './Register.scss';
import { TRANSLATION } from '../../lang/ru/translation';

export const Register: FC<Record<string, never>> = () => {
  const handleRegister = (e: MouseEvent) => {
    console.log('handleRegister', e);
  };
  const inputs: InputProps[] = [
    {
      name: 'input-first-name',
      label: TRANSLATION.Register.inputFirstNameLabel,
      placeholder: TRANSLATION.Register.inputFirstNamePlaceholder,
      required: true,
    },
    {
      name: 'input-second-name',
      label: TRANSLATION.Register.inputSecondNameLabel,
      placeholder: TRANSLATION.Register.inputSecondNamePlaceholder,
      required: true,
    },
    {
      name: 'input-login',
      label: TRANSLATION.Register.inputLoginLabel,
      placeholder: TRANSLATION.Register.inputLoginPlaceholder,
      required: true,
    },
    {
      name: 'input-email',
      label: TRANSLATION.Register.inputEmailLabel,
      placeholder: TRANSLATION.Register.inputEmailPlaceholder,
      required: true,
    },
    {
      name: 'input-phone',
      label: TRANSLATION.Register.inputPhoneLabel,
      placeholder: TRANSLATION.Register.inputPhonePlaceholder,
      required: true,
    },
    {
      name: 'input-password',
      label: TRANSLATION.Register.inputPasswordLabel,
      placeholder: TRANSLATION.Register.inputPasswordPlaceholder,
      required: true,
    },
  ];
  const button: ButtonProps = {
    type: 'submit',
    name: 'button-register',
    text: TRANSLATION.Register.submitButtonText,
    click: handleRegister,
  };

  return (
    <section className="register">
      <div className="register__header">
        <MainLink text="Назад" href="/login" />
        <Title text="Регистрация" />
      </div>
      <Form name="registerForm" inputs={inputs} button={button} />
    </section>
  );
};
