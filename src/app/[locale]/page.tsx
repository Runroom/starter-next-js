'use client';
import styles from '@/styles/Welcome.module.css';

import { LanguageSwitcher } from '@/Shared/ui/components/LanguageSwitcher';

import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <main className={styles.welcome}>
      <h1 className={styles.welcome__title}>
        <span className={styles.welcome__gradient}>Runroom Starter</span>
        <span className={`${styles.welcome__gradient} ${styles.welcome__below}`}>
          {t(`welcome`)}
        </span>
      </h1>
      <LanguageSwitcher />
    </main>
  );
}
