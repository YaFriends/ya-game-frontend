import React, { FC } from 'react';

import { FallbackProps } from '../../components/ErrorBoundary/ErrorBoundary';
import { Button } from '../../components/ui/Button/Button';
import { Title } from '../../components/ui/Title/Title';
import { TRANSLATION } from '../../lang/ru/translation';

const { message, buttonText } = TRANSLATION.ErrorMessage;

export const ErrorContainer: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="container" role="alert">
      <Title text={message} />
      <pre>{error.message}</pre>
      <Button type="button" click={resetErrorBoundary} text={buttonText} />
    </div>
  );
};
