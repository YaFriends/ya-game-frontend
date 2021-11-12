import React, { FC } from 'react';

import { Form } from '../../components/ui/Form/Form';
import { Input } from '../../components/ui/Input/Input';

export interface ProfileInfoProps {
  inputs: profileInputs[];
  disabled?: boolean;
}

export interface profileInputs {
  name: string;
  label: string;
  placeholder: string;
  disabled?: boolean;
}

export const ProfileInfo: FC<ProfileInfoProps> = ({ inputs, disabled }) => {
  const renderInputs = inputs.map(input => {
    return <Input key={input.name} {...input} disabled={disabled ?? false} />;
  });

  return (
    <Form submit={() => console.log('asd')} name="profileEdit">
      {renderInputs}
    </Form>
  );
};
