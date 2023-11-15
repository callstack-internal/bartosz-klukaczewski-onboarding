module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native/.*|react-navigation|@react-navigation/.*))',
  ],
  setupFilesAfterEnv: ['<rootDir>/testSetup.ts'],
};
