import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { SignUpData } from '../../@types/AuthTypes';
import { Button } from '../../components/ui/Button/Button';
import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';
import { MainLink } from '../../components/ui/Link/Link';
import { Spinner } from '../../components/ui/Spinner/Spinner';
import { Title } from '../../components/ui/Title/Title';
import { useAppSelector } from '../../hooks/redux';
import { useAuth } from '../../hooks/use-auth';
import { TRANSLATION } from '../../lang/ru/translation';
import { useSignUpMutation } from '../../services/AuthAPI';
import { currentTheme } from '../../store/slices/themeSlice';
import { SignUpSchema } from '../../utils/ValidateSchema';

import './Register.scss';

export const Register: FC<Record<string, never>> = () => {
  const [attemptSignUp, { isLoading }] = useSignUpMutation();
  const history = useHistory();
  const { isAuth } = useAuth();
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);

  useEffect(() => {
    if (isAuth) {
      history.push('/');
    }
  }, [isAuth]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpData>({
    criteriaMode: 'all',
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpData> = data => attemptSignUp(data);

  return (
    <section className="register">
      {isLoading && <Spinner />}
      <div className="register__header">
        <MainLink text="Назад" href="/login" theme={currentTheme} />
        <Title text="Регистрация" theme={currentTheme} />
      </div>
      <Form name="registerForm" submit={handleSubmit(onSubmit)}>
        <div>
          <Input
            register={register}
            error={errors.first_name}
            label={TRANSLATION.Register.inputFirstNameLabel}
            name="first_name"
            placeholder={TRANSLATION.Register.inputFirstNamePlaceholder}
          />
          <Input
            register={register}
            error={errors.second_name}
            label={TRANSLATION.Register.inputSecondNameLabel}
            name="second_name"
            placeholder={TRANSLATION.Register.inputSecondNamePlaceholder}
          />
          <Input
            register={register}
            error={errors.login}
            label={TRANSLATION.Register.inputLoginLabel}
            name="login"
            placeholder={TRANSLATION.Register.inputLoginPlaceholder}
          />
          <Input
            register={register}
            error={errors.email}
            label={TRANSLATION.Register.inputEmailLabel}
            name="email"
            type="email"
            placeholder={TRANSLATION.Register.inputEmailPlaceholder}
          />
          <Input
            register={register}
            error={errors.phone}
            label={TRANSLATION.Register.inputPhoneLabel}
            name="phone"
            placeholder={TRANSLATION.Register.inputPhonePlaceholder}
          />
          <Input
            register={register}
            error={errors.password}
            name="password"
            label={TRANSLATION.Register.inputPasswordLabel}
            type="password"
            placeholder={TRANSLATION.Register.inputPasswordPlaceholder}
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
