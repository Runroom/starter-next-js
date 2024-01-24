'use client';
import { PropsWithChildren } from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { TranslationsProvider, RQProvider } from '@/Shared/application';

const i18nNamespaces = ['common'];

interface GlobalProvidersProps {
  locale: string;
}

const GlobalProviders = ({ children, locale }: PropsWithChildren<GlobalProvidersProps>) => (
  <RQProvider>
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale}>
      {children}
    </TranslationsProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </RQProvider>
);

export default GlobalProviders;
