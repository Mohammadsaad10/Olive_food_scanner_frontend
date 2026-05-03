import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-200 flex items-center justify-center bg-gray-50 p-8">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Something went wrong
            </h2>
            <p className="mb-4 text-gray-600">
              We apologize for the inconvenience. Please refresh the page and try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-full bg-primary px-6 py-2 text-white transition-opacity hover:opacity-90"
            >
              Refresh Page
            </button>
            {import.meta.env.DEV && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-gray-500">
                  Error Details
                </summary>
                <pre className="mt-2 overflow-auto bg-gray-100 p-4 text-xs">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
