'use client';
import { LanguageSwitcher } from '@/Shared/ui/components/LanguageSwitcher';

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <main>
      <h1>Runroom - NextJS Starter</h1>
      <p>{t('language')}</p>
      <LanguageSwitcher />
    </main>
  );
}
