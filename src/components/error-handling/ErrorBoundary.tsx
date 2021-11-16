import React, { Component, ComponentType, ErrorInfo, PropsWithChildren } from 'react';

const isArrayChange = (a: unknown[] = [], b: unknown[] = []) =>
  a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]));

export interface FallbackProps {
  error: Error;
  resetErrorBoundary: (...args: unknown[]) => void;
}

interface ErrorBoundaryPropsWithComponent {
  onResetKeysChange?: (
    prevResetKeys: unknown[] | undefined,
    resetKeys: unknown[] | undefined
  ) => void;
  onReset?: (...args: unknown[]) => void;
  onError?: (error: Error, info: { componentStack: string }) => void;
  resetKeys?: unknown[];
  FallbackComponent: ComponentType<FallbackProps>;
}

type ErrorBoundaryState = { error: Error | null };

export class ErrorBoundary extends Component<
  PropsWithChildren<ErrorBoundaryPropsWithComponent>,
  ErrorBoundaryState
> {
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  state: ErrorBoundaryState = {
    error: null,
  };

  resetErrorBoundary = (...args: unknown[]) => {
    this.props.onReset?.(...args);
    this.reset();
  };

  reset() {
    this.setState(() => {
      return {
        error: null,
      };
    });
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError?.(error, info);
  }

  componentDidUpdate(prevProps: ErrorBoundaryPropsWithComponent, prevState: ErrorBoundaryState) {
    const { error } = this.state;
    const { resetKeys } = this.props;

    if (
      error !== null &&
      prevState.error !== null &&
      isArrayChange(prevProps.resetKeys, resetKeys)
    ) {
      this.props.onResetKeysChange?.(prevProps.resetKeys, resetKeys);
      this.reset();
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
        return <FallbackComponent {...props} />;
      }
      throw new Error('Requires a FallbackComponent prop');
    }

    return this.props.children;
  }
}
