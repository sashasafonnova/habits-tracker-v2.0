import { classMaker } from './classMaker';

describe('classMaker', () => {
   test('only main class', () => {
      expect(classMaker('someClass')).toBe('someClass');
   });

   test('with additional class', () => {
      const newClass = 'someClass class1';
      expect(classMaker('someClass', ['class1'])).toBe(newClass);
   });

   test('with mods undefined', () => {
      const newClass = 'someClass class1';
      expect(classMaker('someClass', ['class1'])).toBe(newClass);
   });
});