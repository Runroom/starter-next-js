import { expect, afterEach, beforeEach, beforeAll, vi } from 'vitest';
import { loadEnvConfig } from '@next/env';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

loadEnvConfig(process.env.PWD!, undefined, {
  info: () => vi.fn(),
  error: () => vi.fn()
});

beforeAll(() => {
  vi.mock('next/router', () => require('next-router-mock'));
});

beforeEach(() => {
  Object.defineProperty(window, 'resizeTo', {
    value: (width: number, height: number) => {
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        writable: true,
        value: width
      });
      Object.defineProperty(window, 'outerWidth', {
        configurable: true,
        writable: true,
        value: width
      });
      Object.defineProperty(window, 'innerHeight', {
        configurable: true,
        writable: true,
        value: height
      });
      Object.defineProperty(window, 'outerHeight', {
        configurable: true,
        writable: true,
        value: height
      });
      window.dispatchEvent(new Event('resize'));
    }
  });

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }))
  });
});

afterEach(() => {
  cleanup();
});
