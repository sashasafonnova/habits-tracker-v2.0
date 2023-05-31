/* eslint-disable linebreak-style */

export default {
   clearMocks: true,
   transformIgnorePatterns: [
      '\\\\node_modules\\\\',
      '\\.pnp\\.[^\\\\]+$'
   ],
   testMatch: [
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[tj]s?(x)'
   ],
   testEnvironment: 'jsdom',
   rootDir: '../../',
   modulePaths: [
      '<rootDir>/src'
   ],
   moduleFileExtensions: [
      'js',
      'mjs',
      'cjs',
      'jsx',
      'ts',
      'tsx',
      'json',
      'node'
   ],
   moduleDirectories: [
      'node_modules'
   ],
   preset: 'ts-jest',
   transform: {
      '^.+\\.ts?$': 'ts-jest',
   },
   setupFilesAfterEnv: ['<rootDir>/config/jest/jest-setup.ts'],
   moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy'
   },
};
