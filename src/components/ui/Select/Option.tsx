import React, { FC, PropsWithChildren } from 'react';
import { OptionsProps } from './SelectTypes';

const Option: FC<PropsWithChildren<OptionsProps>> = (
    {
        value,
        children,
        disabled = false
    }) => {
    return(
        <option
            value={ value }
            disabled={ disabled }
        >
            { children }
        </option>
    )
};

export { Option };
