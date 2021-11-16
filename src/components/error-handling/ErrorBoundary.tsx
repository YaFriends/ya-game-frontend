import React, { Component, ComponentType, ErrorInfo, PropsWithChildren, ReactNode } from 'react';

const isArrayChange = (a: unknown[] = [], b: unknown[] = []): boolean =>
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
  static getDerivedStateFromError(error: Error): { error: Error } {
    return { error };
  }

  state: ErrorBoundaryState = {
    error: null,
  };

  resetErrorBoundary = (...args: unknown[]): void => {
    this.props.onReset?.(...args);
    this.reset();
  };

  reset(): void {
    this.setState(() => {
      return {
        error: null,
      };
    });
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.props.onError?.(error, info);
  }

  componentDidUpdate(
    prevProps: ErrorBoundaryPropsWithComponent,
    prevState: ErrorBoundaryState
  ): void {
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

  render(): ReactNode {
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
