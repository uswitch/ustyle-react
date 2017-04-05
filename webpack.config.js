const {resolve} = require('path');

module.exports = {
  context: __dirname,
  entry: './demo/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, './demo')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
};
