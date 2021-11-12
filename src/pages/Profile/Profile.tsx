import React, { FC, useState } from 'react';

import { ProfileInfo, profileInputs } from './ProfileInfo';

const userData: profileInputs[] = [
  { name: 'first_name', label: 'Имя', placeholder: 'Тут могло быть твое имя' },
  { name: 'second_name', label: 'Фамилия', placeholder: 'А тут фамилия' },
  { name: 'email', label: 'Email', placeholder: 'Email' },
  { name: 'phone', label: 'Телефон', placeholder: 'Телефон' },
  { name: 'display_name', label: 'Nickname', placeholder: 'Никнейм' },
];

type stepTypes = 'profile' | 'edit-profile' | 'password';

export const Profile: FC<Record<string, never>> = () => {
  const [step, setStep] = useState<stepTypes>('profile');

  const renderInputs = (step: stepTypes) => {
    switch (step) {
      case 'profile':
        return <ProfileInfo inputs={userData} disabled={false} />;
      case 'edit-profile':
        return <ProfileInfo inputs={userData} disabled={true} />;
      case 'password':
        return <div>тут смена логина</div>;
      default:
        return <div>что-то пошло не так</div>;
    }
  };

  return (
    <section>
      <div>
        тут аватарка и тд
        <button onClick={() => setStep('edit-profile')}>поменять на изменяемую область</button>
        <button>сменить пароль</button>
      </div>
      {renderInputs(step)}
    </section>
  );
};
