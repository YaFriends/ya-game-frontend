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
      error: '',
      value: '',
    },
    {
      name: 'newPassword',
      label: NewPasswordLabel,
      placeholder: NewPasswordPlaceholder,
      error: '',
      value: '',
    },
    {
      name: 'confirmNewPassword',
      label: ConfirmPasswordLabel,
      placeholder: ConfirmPasswordPlaceholder,
      error: '',
      value: '',
    },
  ]);

  const handleChangePassword = (event: FormEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    const changedIndex = inputAttributes.findIndex(attribute => attribute.name === name);
    const copyState = [...inputAttributes];
    copyState[changedIndex] = {
      ...copyState[changedIndex],
      value: value,
    };
    setInputAttributes(copyState);
  };

  const inputsList = inputAttributes.map(attribute => {
    return <Input key={attribute.name} {...attribute} required change={handleChangePassword} />;
  });

  const findIndexByName = (name: string): number => {
    return inputAttributes.findIndex(attribute => attribute.name === name);
  };

  const setError = (index: number) => {
    const copyState = [...inputAttributes];
    copyState[index] = {
      ...copyState[index],
      error: ConfirmPasswordError,
    };
    return copyState;
  };

  const removeErrors = () => {
    const copyState = [...inputAttributes];
    return copyState.map(input => {
      return { ...input, error: '' };
    });
  };

  const changePassword = (event: FormEvent) => {
    event.preventDefault();
    const newPasswordIdx = findIndexByName('newPassword');
    const confirmPasswordIdx = findIndexByName('confirmNewPassword');

    if (inputAttributes[newPasswordIdx].value !== inputAttributes[confirmPasswordIdx].value) {
      const newState = setError(confirmPasswordIdx);
      setInputAttributes(newState);
    } else {
      const newState = removeErrors();
      setInputAttributes(newState);
    }
  };

  return (
    <Form name="profile-password" submit={changePassword}>
      <Title text={PasswordTitle} extendClass="text-right mb-6" />
      {inputsList}
    </Form>
  );
};
