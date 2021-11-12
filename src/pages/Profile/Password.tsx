import React, { FC } from 'react';

import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';

import { inputs } from './Info';

export const Password: FC = () => {
  const password: inputs[] = [
    { name: 'oldPassword', label: 'Старый пароль', placeholder: 'Введите старый пароль' },
    { name: 'newPassword', label: 'Новый пароль', placeholder: 'Введите новый пароль' },
    {
      name: 'confirmNewPassword',
      label: 'Повтор нового пароля',
      placeholder: 'Повторите введенный новый пароль',
    },
  ];

  const renderPasswordInputs = password.map(input => {
    return <Input key={input.name} {...input} />;
  });

  return (
    <Form name="profile-password" submit={() => console.log('password is change')}>
      {renderPasswordInputs}
    </Form>
  );
};
