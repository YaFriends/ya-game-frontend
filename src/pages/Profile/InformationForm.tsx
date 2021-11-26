import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { UserUpdateProfileProps } from '../../@types/UserTypes';
import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';
import { Spinner } from '../../components/ui/Spinner/Spinner';
import { Title } from '../../components/ui/Title/Title';
import { useAppDispatch } from '../../hooks/redux';
import { TRANSLATION } from '../../lang/ru/translation';
import { useUpdateProfileMutation } from '../../services/UserAPI';
import { authActions } from '../../store/slices/authSlice';
import { ProfileInfoSchema } from '../../utils/ValidateSchema';

const {
  EditDisabledTitle,
  EditTitle,
  AttributeName,
  AttributeNamePlaceholder,
  AttributeSecondName,
  AttributeSecondNamePlaceholder,
  AttributeLogin,
  AttributeLoginPlaceholder,
  AttributeEmail,
  AttributePhone,
  AttributeNickname,
} = TRANSLATION.Profile;

export interface ProfileInfoProps {
  disabled?: boolean;
  userInfo: UserUpdateProfileProps;
}

export const InformationForm: FC<ProfileInfoProps> = ({ disabled, userInfo }) => {
  const [attemptUpdateProfile, { isLoading, data: updatedUser, isSuccess }] =
    useUpdateProfileMutation();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserUpdateProfileProps>({
    criteriaMode: 'all',
    resolver: yupResolver(ProfileInfoSchema),
    defaultValues: {
      first_name: userInfo.first_name,
      second_name: userInfo.second_name,
      login: userInfo.login,
      email: userInfo.email,
      phone: userInfo.phone,
      display_name: userInfo.display_name,
    },
  });

  useEffect(() => {
    if (updatedUser) {
      dispatch(authActions.setCurrentUser(updatedUser));
    }
  }, [updatedUser]);

  useEffect(() => {
    if (isSuccess) {
      history.push('/profile');
    }
  }, [isSuccess]);

  const onSubmit: SubmitHandler<UserUpdateProfileProps> = data => attemptUpdateProfile(data);

  return (
    <section>
      {isLoading && <Spinner />}
      <Form name="profileEdit" submit={handleSubmit(onSubmit)}>
        <Title text={disabled ? EditDisabledTitle : EditTitle} extendClass="text-right mb-6" />
        <Input
          register={register}
          error={errors.first_name}
          label={AttributeName}
          name="first_name"
          disabled={disabled}
          placeholder={AttributeNamePlaceholder}
        />
        <Input
          register={register}
          error={errors.second_name}
          label={AttributeSecondName}
          name="second_name"
          disabled={disabled}
          placeholder={AttributeSecondNamePlaceholder}
        />
        <Input
          register={register}
          error={errors.login}
          label={AttributeLogin}
          type="login"
          name="login"
          disabled={disabled}
          placeholder={AttributeLoginPlaceholder}
        />
        <Input
          register={register}
          error={errors.email}
          label={AttributeEmail}
          type="email"
          name="email"
          disabled={disabled}
          placeholder={AttributeEmail}
        />
        <Input
          register={register}
          error={errors.phone}
          label={AttributePhone}
          name="phone"
          disabled={disabled}
          placeholder={AttributePhone}
        />
        <Input
          register={register}
          error={errors.display_name}
          label={AttributeNickname}
          name="display_name"
          disabled={disabled}
          placeholder={AttributeNickname}
        />
      </Form>
    </section>
  );
};
