import React, { FC } from 'react';

import { Button } from '../../components/ui/Button/Button';
import { Title } from '../../components/ui/Title/Title';
import { TRANSLATION } from '../../lang/ru/translation';

import { FallbackProps } from './ErrorBoundary';

const { message, buttonText } = TRANSLATION.ErrorMessage;

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="container">
      <Title text={message} />
      <pre>{error.message || error}</pre>
      <Button type="button" text={buttonText} click={resetErrorBoundary} />
    </div>
  );
};

export { ErrorFallback };
