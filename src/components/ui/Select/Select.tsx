import React, { FC } from 'react';
import { Option } from './Option';
import { SelectProps } from './SelectTypes';
import './Select.scss';

const Select: FC<SelectProps> = (
    {
        name,
        id,
        options,
        change,
        defaultValue,
        label,
        require = false,
        disabled = false
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
        <div className='flex flex-col'>
            <label>{ label }</label>
            <select
                required={ require }
                name={ name }
                id={ id }
                onChange={ change }
                defaultValue={ defaultValue }
                disabled={ disabled }
            >
                { createOptions }
            </select>
        </div>
    )
};

export { Select };
