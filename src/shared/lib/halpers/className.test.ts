import { ClassNames } from './classNames';

describe('classNames', () => {
  test('test', () => {
    expect(ClassNames('someClass')).toBe('someClass');
  });
});
