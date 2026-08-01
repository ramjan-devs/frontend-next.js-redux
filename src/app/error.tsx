'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service if needed
    console.error('Unhandled app error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background text-foreground space-y-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Something went wrong!</h1>
      <p className="text-muted-foreground max-w-md">
        An unexpected error occurred. Please try again or contact support if the issue persists.
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
