import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { SignUpData } from '../../api/AuthAPI';
import { Button } from '../../components/ui/Button/Button';
import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';
import { MainLink } from '../../components/ui/Link/Link';
import { Title } from '../../components/ui/Title/Title';
import { AuthController } from '../../controllers/AuthController';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/use-auth';
import { TRANSLATION } from '../../lang/ru/translation';
import { authActions } from '../../store/slices/authSlice';
import { SignUpSchema } from '../../utils/ValidateSchema';
import './Register.scss';

export const Register: FC<Record<string, never>> = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { isAuth } = useAuth();

  if (isAuth) {
    history.push('/');
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpData>({
    criteriaMode: 'all',
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpData> = data =>
    AuthController.signUp(data).then(response => dispatch(authActions.setCurrentUser(response)));

  return (
    <section className="register">
      <div className="register__header">
        <MainLink text="Назад" href="/login" />
        <Title text="Регистрация" />
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
