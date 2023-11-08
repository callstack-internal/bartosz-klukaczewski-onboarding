module.exports = {
  dependencies: {
    // we want to manually integrate only a choice of icons from the library
    // so we need to fully disable auto-linking for it, otherwise all icons would be added
    // https://github.com/oblador/react-native-vector-icons#ios-setup
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
};
