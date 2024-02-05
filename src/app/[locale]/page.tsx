'use client';

import { LanguageSwitcher } from '@/Shared/ui/components/LanguageSwitcher';
import { Welcome } from '@/Shared/ui/components/Welcome';

export default function Home() {
  return (
    <>
      <Welcome />
      <LanguageSwitcher />
    </>
  );
}
