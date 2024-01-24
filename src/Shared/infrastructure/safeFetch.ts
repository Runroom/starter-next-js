import z from 'zod';

export class HttpError {
  constructor(readonly response: Response) {}
}

export const safeFetch = async <T>(
  schema: z.Schema<T>,
  input: RequestInfo,
  init?: RequestInit
): Promise<T> => {
  const response = await fetch(input, init);

  if (!response.ok) {
    throw new HttpError(response);
  }

  const data = await response.json().catch(() => {
    throw new Error('TODO ERROR !response.json()');
  });

  const result = schema.safeParse(data);

  if (!result.success) {
    throw new Error('TODO ERROR !result.success');
  }

  return result.data;
};
