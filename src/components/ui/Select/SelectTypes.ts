import { SelectHTMLAttributes, SetStateAction } from 'react';

type SelectedChangeType = (option: SetStateAction<OptionsProps>) => void;

interface OptionsProps {
    label: string;
    value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string,
    options: OptionsProps[];
    selected: OptionsProps;
    onSelectedChange: SelectedChangeType;
}

export type {
    OptionsProps,
    SelectProps,
    SelectedChangeType
};
