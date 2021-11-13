import React, { FC } from 'react';

import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';
import { DUMMY_USER } from '../MOCKS/Dashboard';

export interface ProfileInfoProps {
  disabled?: boolean;
}

export interface inputs {
  name: string;
  label: string;
  placeholder: string;
  disabled?: boolean;
}

const userData: inputs[] = [
  { name: 'first_name', label: 'Имя', placeholder: 'Тут могло быть твое имя' },
  { name: 'second_name', label: 'Фамилия', placeholder: 'А тут фамилия' },
  { name: 'email', label: 'Email', placeholder: 'Email' },
  { name: 'phone', label: 'Телефон', placeholder: 'Телефон' },
  { name: 'display_name', label: 'Nickname', placeholder: 'Никнейм' },
];

export const Info: FC<ProfileInfoProps> = ({ disabled }) => {
  const { avatar, ...dummy } = DUMMY_USER;
  console.log(dummy, avatar);
  const renderInputs = userData.map(({ name, label, placeholder }) => {
    return (
      <Input
        key={name}
        name={name}
        label={label}
        placeholder={placeholder}
        value={dummy.hasOwnProperty(name) ? dummy[name] : placeholder}
        disabled={disabled ?? false}
      />
    );
  });

  return (
    <Form submit={() => console.log('asd')} name="profileEdit">
      {renderInputs}
    </Form>
  );
};
