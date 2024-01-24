'use client';
import type { PropsWithChildren } from 'react';

import { createGenericContext } from '@/Shared/ui/createGenericContext';
import { LoaderName, useLoaderController } from '@/Shared/ui/components/Loader/useLoaderController';

type Context = {
  loading: string;
  startLoading: (name?: string) => void;
  stopLoading: () => void;
  registerLoader: (loaderName: LoaderName<string>) => void;
  unregisterLoader: (loaderName: LoaderName<string>) => void;
};

type Props = PropsWithChildren & {};

const [useLoader, StateContextProvider] = createGenericContext<Context>();

const LoaderProvider = ({ children }: Props): JSX.Element => {
  const { loading, startLoading, stopLoading, registerLoader, unregisterLoader } =
    useLoaderController();

  return (
    <StateContextProvider
      value={{ loading, startLoading, stopLoading, registerLoader, unregisterLoader }}
    >
      {children}
    </StateContextProvider>
  );
};

export { LoaderProvider, useLoader };
