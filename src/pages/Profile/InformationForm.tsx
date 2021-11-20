import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';
import { Title } from '../../components/ui/Title/Title';
import { TRANSLATION } from '../../lang/ru/translation';
import { ProfileInfoSchema } from 'utils/ValidateSchema';
import { UserData } from 'api/UserAPI';

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

type ProfileInfo = Omit<UserData, 'avatar' | 'id'>

const {
  handleSubmit,
  register,
  formState: { errors },
} = useForm<ProfileInfo>({
  criteriaMode: 'all',
  resolver: yupResolver(ProfileInfoSchema),
});

const onSubmit: SubmitHandler<ProfileInfo> = data => console.log(data);


export const InformationForm: FC<ProfileInfoProps> = ({ disabled }) => {
  /*const [inputsAttributes, setInputsAttributes] = useState<Inputs[]>([
    { name: 'first_name', label: AttributeName, placeholder: AttributeNamePlaceholder, value: '' },
    {
      name: 'second_name',
      label: AttributeSecondName,
      placeholder: AttributeSecondNamePlaceholder,
      value: '',
    },
    { name: 'email', label: AttributeEmail, placeholder: AttributeEmail, value: '' },
    { name: 'phone', label: AttributePhone, placeholder: AttributePhone, value: '' },
    { name: 'display_name', label: AttributeNickname, placeholder: AttributeNickname, value: '' },
  ]);*/






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

    </Form>
  );
};
