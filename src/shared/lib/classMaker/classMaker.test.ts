import { classMaker } from './classMaker';

describe('classMaker', () => {
   test('only main class', () => {
      expect(classMaker('someClass')).toBe('someClass');
   });

   test('with additional class', () => {
      const newClass = 'someClass class1';
      expect(classMaker('someClass', {}, ['class1'])).toBe(newClass);
   });

   test('with mods', () => {
      const newClass = 'someClass mod1 mod2 class1';
      expect(classMaker('someClass', {mod1: true, mod2: true}, ['class1'])).toBe(newClass);
   });

   test('with one false mod', () => {
      const newClass = 'someClass mod1 class1';
      expect(classMaker('someClass', { mod1: true, mod2: false }, ['class1'])).toBe(newClass);
   });

   test('with additional undefined', () => {
      const newClass = 'someClass mod1';
      expect(classMaker('someClass', { mod1: true, mod2: false }, undefined)).toBe(newClass);
   });

   test('with mods undefined', () => {
      const newClass = 'someClass mod1 class1';
      expect(classMaker('someClass', { mod1: true, mod2: undefined }, ['class1'])).toBe(newClass);
   });
});