import { ClassNames } from 'shared/lib';

describe('className', () => {
  test('test', () => {
    expect(ClassNames('someClass')).toBe('someClass');
  });
});
