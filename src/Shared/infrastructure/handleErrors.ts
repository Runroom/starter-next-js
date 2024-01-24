import z from 'zod';

import { HttpError } from '@/Shared/infrastructure';
import { ValidationError, HttpCodes, ServerError } from '@/Shared/domain';

export const processErrors = (error: HttpError) => {
  if (error.response.status === HttpCodes.unprocessableEntity) {
    return extractUnprocessableEntityResponse(error.response);
  } else if (error.response.status === HttpCodes.badRequest) {
    return extractBadRequestResponse(error.response);
  }

  throw new Error('Unprocessed error');
};

export const extractUnprocessableEntityResponse = async (
  response: Response
): Promise<ValidationError[]> => {
  const schema = z.array(
    z.object({
      name: z.string(),
      message: z.string()
    })
  );

  if (response.status === HttpCodes.unprocessableEntity) {
    const data = await response.json();
    const result = schema.safeParse(data);

    if (!result.success) {
      throw new Error('TODO ERROR !result.success');
    }

    return result.data;
  }

  throw new Error('TODO extractUnprocessableEntityResponse');
};

export const extractBadRequestResponse = async (response: Response): Promise<ServerError> => {
  const schema = z.object({
    errorMessage: z.string()
  });

  if (response.status === HttpCodes.badRequest) {
    const data = await response.json();
    const result = schema.safeParse(data);

    if (!result.success) {
      throw new Error('TODO ERROR !result.success');
    }

    return result.data;
  }

  throw new Error('TODO extractBadRequestResponse');
};
