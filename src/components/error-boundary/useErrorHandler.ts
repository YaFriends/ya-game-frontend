import { useState } from 'react';

function useErrorHandler(givenError?: unknown): (error: unknown) => void {
    const [error, setError] = useState<unknown>(null);
    if (givenError !== null
        && typeof givenError === 'string') throw new Error(givenError);
    if (givenError != null) throw givenError;
    if (error != null) throw error;
    return setError;
}

export { useErrorHandler };
