import React, { Component, ErrorInfo, ReactNode } from 'react';

const isArrayChange = (a: unknown[] = [], b: unknown[] = []): boolean =>
  a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]));

export interface FallbackProps {
  error: Error;
  resetErrorBoundary: (...args: unknown[]) => void;
}

declare function FallbackRender(
  props: FallbackProps
): React.ReactElement<unknown, string | React.FunctionComponent | typeof React.Component> | null;

interface ErrorBoundaryPropsWithRender {
  onResetKeysChange?: (
    prevResetKeys: unknown[] | undefined,
    resetKeys: unknown[] | undefined
  ) => void;
  onReset?: (...args: unknown[]) => void;
  onError?: (error: Error, info: { componentStack: string }) => void;
  resetKeys?: unknown[];
  fallbackRender: typeof FallbackRender;
}

type ErrorBoundaryState = { error: Error | null };

export class ErrorBoundary extends Component<ErrorBoundaryPropsWithRender> {
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

  componentDidUpdate(prevProps: ErrorBoundaryPropsWithRender, prevState: ErrorBoundaryState): void {
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
    const { fallbackRender } = this.props;

    if (error !== null) {
      const props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      };
      if (typeof fallbackRender === 'function') {
        return fallbackRender(props);
      }
      throw new Error('fallbackRender is required');
    }

    return this.props.children;
  }
}
