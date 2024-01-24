import { MessagesModel } from '@/Shared/domain';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

export const attachFormErrors = <T extends FieldValues>(
  form: UseFormReturn<T>,
  errors: MessagesModel[] | undefined = []
): boolean => {
  let errorCount = 0;

  errors.forEach(error => {
    if (!error.name) return;

    errorCount++;

    form.setError(
      error.name as Path<T>,
      {
        type: 'server',
        message: error.message
      },
      { shouldFocus: true }
    );
  });

  return errorCount > 0;
};
