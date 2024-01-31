'use client';
import { useEffect, useState } from 'react';

import { useLoader } from '@/Shared/ui/components/Loader';

interface IUseHook {
  example: string;
}

export const useHook = (): IUseHook => {
  const { startLoading, stopLoading } = useLoader();
  const [example, setExample] = useState<string>('');

  const loadExample = (text: string) => {
    startLoading();

    setExample(text);

    stopLoading();
  };

  useEffect(() => {
    const ex = 'example';
    loadExample(ex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    example
  };
};
