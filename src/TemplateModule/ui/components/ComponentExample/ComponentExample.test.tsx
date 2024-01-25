import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';

import { ComponentExample } from './ComponentExample';

describe('Component Example Test', () => {
  test('Must render an Empty Tag', () => {
    const { container } = render(<ComponentExample />);
    expect(container).toBeEmptyDOMElement();
  });
});
