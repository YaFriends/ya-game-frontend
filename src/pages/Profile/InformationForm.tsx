import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { UserData } from '../../api/UserAPI';
import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';
import { Title } from '../../components/ui/Title/Title';
import { TRANSLATION } from '../../lang/ru/translation';
import { ProfileInfoSchema } from '../../utils/ValidateSchema';

const {
  EditDisabledTitle,
  EditTitle,
  AttributeName,
  AttributeNamePlaceholder,
  AttributeSecondName,
  AttributeSecondNamePlaceholder,
  AttributeEmail,
  AttributePhone,
  AttributeNickname,
} = TRANSLATION.Profile;

export interface ProfileInfoProps {
  disabled?: boolean;
}

type ProfileInfo = Omit<UserData, 'avatar' | 'id'>;

export const InformationForm: FC<ProfileInfoProps> = ({ disabled }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProfileInfo>({
    criteriaMode: 'all',
    resolver: yupResolver(ProfileInfoSchema),
  });

  const onSubmit: SubmitHandler<ProfileInfo> = data => console.log(data);
  return (
    <Form submit={handleSubmit(onSubmit)} name="profile-edit">
      <Title text={disabled ? EditDisabledTitle : EditTitle} extendClass="text-right mb-6" />
      <Input
        register={register}
        error={errors.first_name}
        label={AttributeName}
        name="first_name"
        placeholder={AttributeNamePlaceholder}
      />
      <Input
        register={register}
        error={errors.second_name}
        label={AttributeSecondName}
        name="second_name"
        placeholder={AttributeSecondNamePlaceholder}
      />
      <Input
        register={register}
        error={errors.email}
        label={AttributeEmail}
        name="email"
        placeholder={AttributeEmail}
      />
      <Input
        register={register}
        error={errors.phone}
        label={AttributePhone}
        name="phone"
        placeholder={AttributePhone}
      />
      <Input
        register={register}
        error={errors.display_name}
        label={AttributeNickname}
        name="display_name"
        placeholder={AttributeNickname}
      />
    </Form>
  );
};
