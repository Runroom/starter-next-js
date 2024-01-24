'use client';
import { useState } from 'react';

type ReservedLoaderNames = 'app';
export type LoaderName<T> = T & (T extends ReservedLoaderNames ? never : T);

interface IUseLoaderController {
  loading: string;
  startLoading: (name?: string) => void;
  stopLoading: () => void;
  registerLoader: (loaderName: LoaderName<string>) => void;
  unregisterLoader: (loaderName: LoaderName<string>) => void;
}

export const useLoaderController = (): IUseLoaderController => {
  const [loading, setLoading] = useState<string>('');

  const [registeredLoaders, setRegisteredLoaders] = useState<string[]>([]);

  const startLoading = (name?: string) => setLoading(name || 'app');

  const stopLoading = () => setLoading('');

  const registerLoader = (loaderName: string) => {
    setRegisteredLoaders([...registeredLoaders, loaderName]);
  };

  const unregisterLoader = (loaderName: string) => {
    setRegisteredLoaders(registeredLoaders.filter(name => name !== loaderName));
  };

  return {
    loading,
    startLoading,
    stopLoading,
    registerLoader,
    unregisterLoader
  };
};
