import z from 'zod';

import { HttpError, processErrors, safeFetch } from '@/Shared/infrastructure';
import { ServerError, ValidationError } from '@/Shared/domain';

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const submitDataFromForm = <T>(
  successSchema: z.Schema<T>,
  path: string,
  data: object
): Promise<T | ValidationError[] | ServerError> =>
  safeFetch<T>(successSchema, `${apiUrl}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(data)
  }).catch(async error => {
    if (error instanceof HttpError) {
      const processedError = await processErrors(error);

      if (processedError) {
        return processedError;
      }
    }

    throw error;
  });
