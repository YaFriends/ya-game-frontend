import React, { FC } from 'react';

type InputProps = {
  name: string,
  required?: boolean,
  id?: string,
}

export const Input: FC<InputProps> = ({ name, id, required }) => {
  return (
    <input className="block" name={ name } id={ id } required={ required }/>
  )
}
