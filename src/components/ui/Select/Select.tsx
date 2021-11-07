import React, { FC } from 'react';
import { Option } from './Option';
import { SelectProps } from './SelectTypes';

const Select: FC<SelectProps> = (
    {
        name,
        id,
        options,
        change,
        defaultValue
    }) => {

    const addDefaultOption = () => {
        return options.unshift({
            value: defaultValue as string,
            children: defaultValue as string,
            disabled: true
        });
    };

    if (typeof defaultValue === 'string') {
        addDefaultOption();
    }

    const createOptions = options.map((option) => {
        const { children ,...props } = option;
        return <Option { ...props } children={ children } key={ option.value }/>;
    });

    return (
        <select
            name={ name }
            id={ id }
            onChange={ change }
            defaultValue={ defaultValue }
        >
            { createOptions }
        </select>
    )
};

export { Select };
