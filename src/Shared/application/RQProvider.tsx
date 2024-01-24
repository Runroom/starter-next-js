'use client';
import { PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const RQProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 10000
          }
        }
      })
  );
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export { RQProvider };
