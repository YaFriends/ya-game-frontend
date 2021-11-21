import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { UserUpdatePasswordProps } from '../../api/UserAPI';
import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';
import { Title } from '../../components/ui/Title/Title';
import { TRANSLATION } from '../../lang/ru/translation';
import { ProfilePasswordSchema } from '../../utils/ValidateSchema';

const {
  OldPasswordLabel,
  OldPasswordPlaceholder,
  NewPasswordLabel,
  NewPasswordPlaceholder,
  ConfirmPasswordLabel,
  ConfirmPasswordPlaceholder,
  PasswordTitle,
} = TRANSLATION.Profile;

interface ProfilePassword extends UserUpdatePasswordProps {
  confirmPassword: string;
}

export const PasswordForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProfilePassword>({
    criteriaMode: 'all',
    resolver: yupResolver(ProfilePasswordSchema),
  });

  const onSubmit: SubmitHandler<UserUpdatePasswordProps> = data => console.log(data);
  return (
    <Form name="profile-password" submit={handleSubmit(onSubmit)}>
      <Title text={PasswordTitle} extendClass="text-right mb-6" />
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
      <Input
        register={register}
        error={errors.confirmPassword}
        label={ConfirmPasswordLabel}
        name="confirmPassword"
        type="password"
        placeholder={ConfirmPasswordPlaceholder}
      />
    </Form>
  );
};
