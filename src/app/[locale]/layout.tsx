import '@/styles/globals.css';
import '@/styles/variables.css';

import { PropsWithChildren } from 'react';

import { dir } from 'i18next';
//import i18nConfig from 'i18nConfig';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GlobalProviders from '@/app/[locale]/GlobalProviders';

const inter = Inter({ subsets: ['latin'] });

//export const generateStaticParams = async () => i18nConfig.locales.map(locale => ({ locale }));

export const metadata: Metadata = {
  title: 'Frontend Starter',
  description: 'Basic boilerplate for frontend projects'
};

interface RootLayoutProps {
  params: {
    locale: string;
  };
}

const RootLayout = ({ children, params: { locale } }: PropsWithChildren<RootLayoutProps>) => (
  <html lang={locale} dir={dir(locale)}>
    <body className={inter.className}>
      <GlobalProviders locale={locale}>
        <main>{children}</main>
      </GlobalProviders>
    </body>
  </html>
);

export default RootLayout;
