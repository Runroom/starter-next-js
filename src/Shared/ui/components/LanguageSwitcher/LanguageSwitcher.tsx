'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from 'i18nConfig';

import styles from './LanguageSwitcher.module.css';

export const LanguageSwitcher = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const languages = i18nConfig.locales;
  const currentLocale = i18n.language;

  const router = useRouter();
  const currentPathname = usePathname() || '';

  const handleLanguageChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const locale = e.currentTarget.dataset.value ?? 'en';

    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push(`/${locale}${currentPathname}`);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${locale}`));
    }

    router.refresh();
  };

  return (
    <div data-testid="language-switcher" className={styles['language-switcher']}>
      <p className={styles.language_title}>{t('language')}</p>
      <ul role="listbox">
        {languages.map(language => (
          <li key={language}>
            <button
              lang={language}
              data-value={language}
              role="option"
              aria-selected={currentLocale === language}
              onClick={handleLanguageChange}
              className={`${currentLocale === language ? styles['active'] : ''}`}
              data-testid={`language-switcher-${language}`}
            >
              {language.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
