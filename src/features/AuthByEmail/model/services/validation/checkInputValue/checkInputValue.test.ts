import { checkInputValue } from './checkInputValue';

describe('checkInputValue', () => {
   test('strinh with spaces', () => {
      expect(checkInputValue('asd asd  ddd')).toBe('asdasdddd');
   });
});