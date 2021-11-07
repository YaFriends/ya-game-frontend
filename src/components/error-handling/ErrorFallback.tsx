import React, { FC } from 'react';
import { FallbackProps } from './ErrorBoundary';
import { TRANSLATION } from '../../lang/ru/translation';

const ErrorFallback: FC<FallbackProps> = ({error, resetErrorBoundary}) => {
    return (
        <div role="alert">
            <p>{ TRANSLATION.SomethingWentWrong }</p>
            <pre>{error.message || error}</pre>
            <button type='button' onClick={resetErrorBoundary}>
                { TRANSLATION.TryAgain }
            </button>
        </div>
    )
};

export { ErrorFallback };
