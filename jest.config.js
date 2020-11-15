module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
    moduleNameMapper: {
    '(.*)\\.js': '$1',
  },
  setupFiles: ['<rootDir>/jest/jest.setup.js']
};
