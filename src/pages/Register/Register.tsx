import React, { FC, FormEvent } from 'react';

import { Button } from '../../components/ui/Button/Button';
import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';
import { MainLink } from '../../components/ui/Link/Link';
import { Title } from '../../components/ui/Title/Title';
import './Register.scss';
import { TRANSLATION } from '../../lang/ru/translation';

export const Register: FC<Record<string, never>> = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit', e);
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
            name="input-first-name"
            label={TRANSLATION.Register.inputFirstNameLabel}
            placeholder={TRANSLATION.Register.inputFirstNamePlaceholder}
            required
          />
          <Input
            name="input-second-name"
            label={TRANSLATION.Register.inputSecondNameLabel}
            placeholder={TRANSLATION.Register.inputSecondNamePlaceholder}
            required
          />
          <Input
            name="input-login"
            label={TRANSLATION.Register.inputLoginLabel}
            placeholder={TRANSLATION.Register.inputLoginPlaceholder}
            required
          />
          <Input
            name="input-email"
            label={TRANSLATION.Register.inputEmailLabel}
            placeholder={TRANSLATION.Register.inputEmailPlaceholder}
            required
          />
          <Input
            name="input-phone"
            label={TRANSLATION.Register.inputPhoneLabel}
            placeholder={TRANSLATION.Register.inputPhonePlaceholder}
            required
          />
          <Input
            name="input-password"
            label={TRANSLATION.Register.inputPasswordLabel}
            placeholder={TRANSLATION.Register.inputPasswordPlaceholder}
            required
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
