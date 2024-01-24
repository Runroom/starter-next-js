'use client';
import { PropsWithChildren, useEffect } from 'react';
import { Spinner, useLoader } from '@/Shared/ui/components/Loader';

import styles from './Loader.module.css';

interface IAppLoaderProps extends PropsWithChildren {}

const AppLoader = ({ children }: IAppLoaderProps): JSX.Element => {
  const { loading } = useLoader();

  return (
    <div data-testid="app-loader" className={styles['loader-wrapper']}>
      {loading && loading === 'app' && <Spinner />}
      {children}
    </div>
  );
};

interface ILoaderWrapperProps extends PropsWithChildren {
  name: string;
}

const LoaderWrapper = ({ children, name }: ILoaderWrapperProps): JSX.Element => {
  const { loading, registerLoader, unregisterLoader } = useLoader();

  useEffect(() => {
    registerLoader(name);
    return () => unregisterLoader(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles['loader-wrapper']}>
      {loading && loading === name && <Spinner component={true} />}
      {children}
    </div>
  );
};

export { AppLoader, LoaderWrapper };
