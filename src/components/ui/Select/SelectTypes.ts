import { ChangeEvent, SelectHTMLAttributes } from 'react';

interface OptionsProps {
    value: string | number;
    children: string;
    disabled?: boolean;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    id: string;
    label: string;
    options: OptionsProps[],
    change: (event: ChangeEvent<HTMLSelectElement>) => void;
    defaultValue?: string;
    require?: boolean;
    disabled?: boolean;
}

export type {
    OptionsProps,
    SelectProps
};
