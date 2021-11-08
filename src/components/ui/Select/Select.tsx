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

    const labelClasses = 'font-bold text-lg text-black mb-1'; //TODO импортировать эти стили, так как в инпуте схожие
    const selectClasses = [
        'bg-black',
        'text-white',
        'h-[38px]',
        'rounded-12px',
        'border-2',
        'border-opacity-40',
        'border-white',
        'text-white',
        'placeholder-white px-3',
        'px-2',
        'focus:outline-none',
        'focus:border-blue',
        'focus:rounded-b-none',
        'hover:cursor-pointer'
    ].join(' ');

    return (
        <div className='flex flex-col'>
            <label className={ labelClasses } htmlFor={ id }>
                { label }
            </label>
            <select
                className={ selectClasses }
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
