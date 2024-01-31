'use client';
import styles from '@/styles/Welcome.module.css';

import { LanguageSwitcher } from '@/Shared/ui/components/LanguageSwitcher';

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <main className={styles.welcome}>
      <h1 className={styles.welcome_title}>
        <span className={styles.welcome_gradient}>Runroom Starter</span>
        <span className={`${styles.welcome_gradient} ${styles.welcome_below}`}>{t(`welcome`)}</span>
      </h1>
      <LanguageSwitcher />
    </main>
  );
}
