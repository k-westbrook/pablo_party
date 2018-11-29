const { join } = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

