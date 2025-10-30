import axios from 'axios';
import { isEmail } from './utils';

jest.mock('axios');
describe('Example component', () => {
  test('renders text', () => {
    expect(isEmail('2')).toBe(false);
    expect(isEmail('2@mai')).toBe(false);
    expect(isEmail('2@mai.ww')).toBe(true);
  });
  test('equal', () => {
    expect({ b: 2 }).toStrictEqual({ b: 2 });
  });
});
