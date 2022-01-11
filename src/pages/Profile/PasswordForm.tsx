import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { UserUpdatePasswordProps } from '../../@types/UserTypes';
import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';
import { Spinner } from '../../components/ui/Spinner/Spinner';
import { Title } from '../../components/ui/Title/Title';
import { useAppSelector } from '../../hooks/redux';
import { TRANSLATION } from '../../lang/ru/translation';
import { useUpdatePasswordMutation } from '../../services/UserAPI';
import { currentTheme } from '../../store/slices/themeSlice';
import { ProfilePasswordSchema } from '../../utils/ValidateSchema';

const {
  OldPasswordLabel,
  OldPasswordPlaceholder,
  NewPasswordLabel,
  NewPasswordPlaceholder,
  PasswordTitle,
} = TRANSLATION.Profile;

export const PasswordForm: FC = () => {
  const [attemptUpdatePassword, { isLoading, isSuccess }] = useUpdatePasswordMutation();
  const history = useHistory();
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);

  useEffect(() => {
    if (isSuccess) {
      history.push('/profile');
    }
  }, [isSuccess]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserUpdatePasswordProps>({
    criteriaMode: 'all',
    resolver: yupResolver(ProfilePasswordSchema),
  });

  const onSubmit: SubmitHandler<UserUpdatePasswordProps> = data => attemptUpdatePassword(data);

  return (
    <section>
      {isLoading && <Spinner />}
      <Form name="profilePassword" submit={handleSubmit(onSubmit)}>
        <Title text={PasswordTitle} extendClass="text-right mb-6" theme={currentTheme} />
        <Input
          register={register}
          error={errors.oldPassword}
          label={OldPasswordLabel}
          name="oldPassword"
          type="password"
          placeholder={OldPasswordPlaceholder}
        />
        <Input
          register={register}
          error={errors.newPassword}
          label={NewPasswordLabel}
          name="newPassword"
          type="password"
          placeholder={NewPasswordPlaceholder}
        />
      </Form>
    </section>
  );
};
