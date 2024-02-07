'use client';
import styles from '@/styles/Welcome.module.css';

import { useTranslation } from 'react-i18next';

export const Welcome = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.welcome}>
      <h1 className={styles.welcome__title}>
        <span className={styles.welcome__gradient}>Runroom Starter</span>
        <span className={`${styles.welcome__gradient} ${styles.welcome__below}`}>
          {t(`welcome`)}
        </span>
      </h1>
    </div>
  );
};
