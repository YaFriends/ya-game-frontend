import { useState } from 'react';

const definite = (error: unknown): boolean => {
  return typeof error !== 'undefined' && error !== null;
};

function useErrorHandler(givenError?: unknown): (error: unknown) => void {
  const [error, setError] = useState<unknown>(null);
  if (definite(givenError)) {
    throw givenError;
  }
  if (definite(error)) {
    throw error;
  }
  return setError;
}

export { useErrorHandler };
