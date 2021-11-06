import React, {
    Component,
    ComponentType,
    ErrorInfo,
    PropsWithChildren
} from 'react';

const changedArray = (a: Array<unknown> = [], b: Array<unknown> = []) =>
    a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]));

interface FallbackProps {
    error: Error;
    resetErrorBoundary: (...args: Array<unknown>) => void;
}

interface ErrorBoundaryPropsWithComponent {
    onResetKeysChange?: (
        prevResetKeys: Array<unknown> | undefined,
        resetKeys: Array<unknown> | undefined,
    ) => void;
    onReset?: (...args: Array<unknown>) => void;
    onError?: (error: Error, info: { componentStack: string }) => void;
    resetKeys?: Array<unknown>;
    FallbackComponent: ComponentType<FallbackProps>;
}

type ErrorBoundaryState = { error: Error | null };

class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryPropsWithComponent>,
    ErrorBoundaryState>
{
    static getDerivedStateFromError(error: Error) {
        return { error }
    }

    state: ErrorBoundaryState = {
        error: null
    };

    resetErrorBoundary = (...args: Array<unknown>) => {
        this.props.onReset?.(...args);
        this.reset()
    };

    reset() {
        this.setState(() => {
            return {
                error: null
            }
        })
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        this.props.onError?.(error, info)
    }

    componentDidUpdate(
        prevProps: ErrorBoundaryPropsWithComponent,
        prevState: ErrorBoundaryState,
    ) {
        const { error } = this.state;
        const { resetKeys } = this.props;

        if (
            error !== null &&
            prevState.error !== null &&
            changedArray(prevProps.resetKeys, resetKeys)
        ) {
            this.props.onResetKeysChange?.(prevProps.resetKeys, resetKeys);
            this.reset()
        }
    }

    render() {
        const { error } = this.state;

        const { FallbackComponent } = this.props;

        if (error !== null) {
            const props = {
                error,
                resetErrorBoundary: this.resetErrorBoundary,
            };
            if (FallbackComponent) {
                return <FallbackComponent {...props} />
            } else {
                throw new Error('Requires a FallbackComponent prop')
            }
        }

        return this.props.children
    }
}

export type { FallbackProps };

export { ErrorBoundary };


