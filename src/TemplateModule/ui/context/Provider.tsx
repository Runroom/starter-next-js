import { PropsWithChildren } from 'react';
import { createGenericContext } from '@/Shared/ui/createGenericContext';

import { useHook } from '@/TemplateModule/ui/hooks';

type Context = {
  example: string;
};

type Props = PropsWithChildren & {};

const [useHookStore, StateContextProvider] = createGenericContext<Context>();

const Provider = ({ children }: Props): JSX.Element => {
  const { example } = useHook();

  return <StateContextProvider value={{ example }}>{children}</StateContextProvider>;
};

export { Provider, useHookStore };
