/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { normalizeFormikError } from '../src/utils/helperfunctions';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('Unit test :- normalizeFormikError', () => {
  expect(normalizeFormikError('Invalid Input', false)).toBe('');
  expect(normalizeFormikError('Invalid Input', true)).toBe('Invalid Input');
  expect(normalizeFormikError(undefined, false)).toBe('');
  expect(normalizeFormikError(undefined, true)).toBe('');
});
