import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { LoginData } from '../../@types/AuthTypes';
import { Button } from '../../components/ui/Button/Button';
import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';
import { MainLink } from '../../components/ui/Link/Link';
import { Spinner } from '../../components/ui/Spinner/Spinner';
import { Title } from '../../components/ui/Title/Title';
import { useLoginMutation } from '../../hooks/api';
import { useAuth } from '../../hooks/use-auth';
import { TRANSLATION } from '../../lang/ru/translation';
import { LoginSchema } from '../../utils/ValidateSchema';
import './Login.scss';

export const Login: FC<Record<string, never>> = () => {
  const [attemptLogin, { isLoading }] = useLoginMutation();
  const history = useHistory();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      history.push('/');
    }
  }, [isAuth]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>({
    criteriaMode: 'all',
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginData> = data => attemptLogin(data);

  return (
    <section className="login">
      {isLoading && <Spinner />}
      <div className="login__header">
        <Title text={TRANSLATION.Login.title} />
        <MainLink text={TRANSLATION.Login.linkToRegisterText} href="/register" />
      </div>
      <Form name="loginForm" submit={handleSubmit(onSubmit)}>
        <div>
          <Input
            register={register}
            error={errors.login}
            label={TRANSLATION.Login.inputLoginLabel}
            name="login"
            placeholder={TRANSLATION.Login.inputLoginPlaceholder}
          />
          <Input
            register={register}
            error={errors.password}
            label={TRANSLATION.Login.inputPasswordLabel}
            type="password"
            name="password"
            placeholder={TRANSLATION.Login.inputPasswordPlaceholder}
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
