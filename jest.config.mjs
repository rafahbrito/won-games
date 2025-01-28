/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  }
};

export default config;
