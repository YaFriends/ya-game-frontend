import React, { FC, useMemo, ReactNode } from 'react';

import { Button, ButtonProps } from '../Button/Button';
import { Input, InputProps } from '../Input/Input';

interface FormProps {
  name: string;
  inputs: InputProps[];
  button: ButtonProps;
  extendClass?: string;
}

const DEFAULT_CLASSES: string[] = ['ui-form', 'w-full'];
const classes = (extendClass?: string): string[] => {
  const result = [...DEFAULT_CLASSES];

  if (extendClass) {
    result.push(extendClass);
  }

  return result;
};

export const Form: FC<FormProps> = ({ name, inputs, button, extendClass = '' }: FormProps) => {
  const classesMemo = useMemo(() => classes(extendClass), [extendClass]);
  const createInputComponent = (input: InputProps, lastInput: boolean): ReactNode => {
    if (lastInput) {
      return (
        <Input
          name={input.name}
          key={input.name}
          label={input.label}
          placeholder={input.placeholder}
          required={input.required}
        />
      );
    }

    return (
      <div className="mb-6">
        <Input
          name={input.name}
          key={input.name}
          label={input.label}
          placeholder={input.placeholder}
          required={input.required}
        />
      </div>
    );
  };
  const createButtonComponent = (button: ButtonProps): ReactNode => {
    return (
      <div className="mt-14">
        <Button
          name={button.name}
          key={button.name}
          type={button.type}
          text={button.text}
          click={button.click}
        />
      </div>
    );
  };

  const inputComponents: ReactNode[] = [];
  const buttonComponent: ReactNode = createButtonComponent(button);
  inputs.forEach((input, index) =>
    inputComponents.push(createInputComponent(input, index === inputs.length - 1))
  );

  return (
    <form name={name} className={classesMemo.join(' ')}>
      {inputComponents}
      {buttonComponent}
    </form>
  );
};
