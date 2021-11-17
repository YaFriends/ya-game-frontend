import React, { FC, FormEvent, useState } from 'react';

import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';
import { Title } from '../../components/ui/Title/Title';
import { TRANSLATION } from '../../lang/ru/translation';

const {
  OldPasswordLabel,
  OldPasswordPlaceholder,
  NewPasswordLabel,
  NewPasswordPlaceholder,
  ConfirmPasswordLabel,
  ConfirmPasswordPlaceholder,
  ConfirmPasswordError,
  PasswordTitle,
} = TRANSLATION.Profile;

import { Inputs } from './InformationForm';

export const PasswordForm: FC = () => {
  const [inputAttributes, setInputAttributes] = useState<Inputs[]>([
    {
      name: 'oldPassword',
      label: OldPasswordLabel,
      placeholder: OldPasswordPlaceholder,
      value: '',
    },
    {
      name: 'newPassword',
      label: NewPasswordLabel,
      placeholder: NewPasswordPlaceholder,
      value: '',
    },
    {
      name: 'confirmNewPassword',
      label: ConfirmPasswordLabel,
      placeholder: ConfirmPasswordPlaceholder,
      value: '',
    },
  ]);

  const handleChangePassword = (event: FormEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    const changedIndex = inputAttributes.findIndex(attribute => attribute.name === name);

    setInputAttributes(prevState => {
      const copyState = [...prevState];
      copyState[changedIndex].value = value;
      return copyState;
    });
  };

  const renderPasswordInputs = inputAttributes.map(attribute => {
    return <Input key={attribute.name} {...attribute} required change={handleChangePassword} />;
  });

  const findIndexByName = (name: string): number => {
    return inputAttributes.findIndex(attribute => attribute.name === name);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const newPasswordIdx = findIndexByName('newPassword');
    const confirmPasswordIdx = findIndexByName('confirmNewPassword');

    if (inputAttributes[newPasswordIdx].value !== inputAttributes[confirmPasswordIdx].value) {
      setInputAttributes(prevState => {
        const copyState = [...prevState];
        copyState[confirmPasswordIdx].error = ConfirmPasswordError;
        return copyState;
      });
    }
  };

  return (
    <Form name="profile-password" submit={submit}>
      <Title text={PasswordTitle} extendClass="text-right mb-6" />
      {renderPasswordInputs}
    </Form>
  );
};
