module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'], // Keep Reanimated plugin
  overrides: [
    {
      test: /\.js$/,
      include: /node_modules\/react-native\//, // Apply to all React Native files
      plugins: ['@babel/plugin-transform-flow-strip-types'], // Strip Flow types
    },
  ],
};
