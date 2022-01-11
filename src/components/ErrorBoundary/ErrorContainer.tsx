import React, { FC } from 'react';

import { FallbackProps } from '../../components/ErrorBoundary/ErrorBoundary';
import { Button } from '../../components/ui/Button/Button';
import { Title } from '../../components/ui/Title/Title';
import { useAppSelector } from '../../hooks/redux';
import { TRANSLATION } from '../../lang/ru/translation';
import { currentTheme } from '../../store/slices/themeSlice';

const { message, buttonText } = TRANSLATION.ErrorMessage;

export const ErrorContainer: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  const currentTheme: currentTheme = useAppSelector(state => state.theme.currentTheme);

  return (
    <div className="container p-20" role="alert">
      <Title text={message} extendClass="mb-10" theme={currentTheme} />
      <pre className="w-full whitespace-normal mb-10">{error.message}</pre>
      <Button type="button" click={resetErrorBoundary} text={buttonText} />
    </div>
  );
};
