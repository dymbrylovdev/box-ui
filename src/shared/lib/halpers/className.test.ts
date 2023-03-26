import { ClassNames } from 'shared/lib';

describe('classNames', () => {
  test('test', () => {
    expect(ClassNames('someClass')).toBe('someClass');
  });
});
