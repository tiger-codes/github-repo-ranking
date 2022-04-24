const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/start.js');
const webpackConfig = require('react-scripts/config/webpack.config');
const fs = require('fs');
const webpack = require('webpack');

// In order to override the webpack configuration without ejecting the create-react-app
// Need these overrides for create react app/node v14/ and report-management-ux-shared to work together
defaults.__set__('configFactory', (webpackEnv) => {
  let config = webpackConfig(webpackEnv);
  config.resolve = {
      ...config.resolve,
      extensions: [...config.resolve.extensions, '.ts', '.js'],
      fallback: {
          assert: false,
          crypto: false,
          path: false,
          util: false,
          stream: require.resolve('stream-browserify'),
          buffer: require.resolve('buffer'),
      },
  };

  config.plugins = [
      ...config.plugins,
      new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
      }),
      new webpack.ProvidePlugin({
          process: 'process/browser',
      }),
  ];

  return config;
}); 