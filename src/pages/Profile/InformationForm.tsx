import React, { FC, FormEvent, useEffect, useState } from 'react';

import { UserData } from '../../api/UserAPI';
import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';
import { Title } from '../../components/ui/Title/Title';
import { TRANSLATION } from '../../lang/ru/translation';

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
  userInfo: UserData;
}

export interface Inputs {
  name: string;
  label: string;
  placeholder: string;
  disabled?: boolean;
  value?: string | number;
  error?: string;
}

export const InformationForm: FC<ProfileInfoProps> = ({ disabled, userInfo }) => {
  const [inputsAttributes, setInputsAttributes] = useState<Inputs[]>([
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
  ]);

  useEffect(() => {
    const copyState = [...inputsAttributes];
    copyState.map(info => {
      info.value = userInfo[info.name as keyof UserData];
    });
    setInputsAttributes(copyState);
  }, []);

  const handleChangeInfo = (event: FormEvent) => {
    const { name, value } = event.currentTarget as HTMLInputElement;
    const changedIndex = inputsAttributes.findIndex(attribute => attribute.name === name);

    setInputsAttributes(prevState => {
      const copyState = [...prevState];
      copyState[changedIndex].value = value;
      return copyState;
    });
  };

  const renderInputs = inputsAttributes.map(attribute => {
    return (
      <Input
        key={attribute.name}
        {...attribute}
        disabled={disabled ?? false}
        change={handleChangeInfo}
        required
      />
    );
  });

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setInputsAttributes(prevState => prevState);
    inputsAttributes.forEach(attribute => {
      console.log({ name: attribute.name, value: attribute.value });
    });
  };

  return (
    <Form submit={submit} name="profile-edit">
      <Title text={disabled ? EditDisabledTitle : EditTitle} extendClass="text-right mb-6" />
      {renderInputs}
    </Form>
  );
};
