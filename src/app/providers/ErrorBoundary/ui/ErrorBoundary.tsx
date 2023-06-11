import React, { ReactNode } from 'react';
import { ErrorInfo } from 'react';
import { AppError } from 'widgets/AppError';

interface ErrorBoundaryProps {
   children: ReactNode;
}

interface ErrorBoundaryState {
   hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
   constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
   }

   static getDerivedStateFromError(error: Error) {
      return { hasError: true };
   }

   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.log(error);
   }

   
   render() {
      const { children } = this.props;
      const { hasError } = this.state;
      
      if (hasError) {
         return <AppError/>;
      }
      return children;
   }
}

export default ErrorBoundary;