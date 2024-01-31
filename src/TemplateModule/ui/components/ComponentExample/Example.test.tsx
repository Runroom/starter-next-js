import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';

import { Example } from './Example';

describe('Component Example Test', () => {
  test('Must render an Empty Tag', () => {
    const { container } = render(<Example />);
    expect(container).toBeEmptyDOMElement();
  });
});
