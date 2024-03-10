import { classNames } from 'shared/lib';

describe('className', () => {
  test('test', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
});
