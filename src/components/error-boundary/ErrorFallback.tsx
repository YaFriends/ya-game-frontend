import React, { FC } from 'react';
import { FallbackProps } from './ErrorBoundary';

const ErrorFallback: FC<FallbackProps> = ({error, resetErrorBoundary}) => {
    return (
        <div role="alert">
            <p>Упс, что-то пошло не так</p>
            <pre>{error.message}</pre>
            <button type='button' onClick={resetErrorBoundary}>
                Попробовать снова
            </button>
        </div>
    )
};

export { ErrorFallback };
