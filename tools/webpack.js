const path = require('path');

const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

const ROOT = path.resolve('.');

const config = {
  target: 'node',
  externals: [nodeExternals()],
  entry: path.join(ROOT, 'src/index.js'),
  output: {
    path: path.join(ROOT, 'dist'),
    filename: 'index.js',
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ['yarn start'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
  },
  stats: 'errors-only',
};

module.exports = config;