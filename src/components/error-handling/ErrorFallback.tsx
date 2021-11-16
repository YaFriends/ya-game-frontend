import React, { FC } from 'react';

import { TRANSLATION } from '../../lang/ru/translation';

import { FallbackProps } from './ErrorBoundary';

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>{TRANSLATION.SomethingWentWrong}</p>
      <pre>{error.message || error}</pre>
      <button type="button" onClick={resetErrorBoundary}>
        {TRANSLATION.TryAgain}
      </button>
    </div>
  );
};

export { ErrorFallback };
