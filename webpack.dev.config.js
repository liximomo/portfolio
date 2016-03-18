var path = require('path');

module.exports = {
  entry: ["webpack-dev-server/client?http://localhost:3000/", "./index.js"],
  output: {
    path: path.join(__dirname, 'assets'),
    filename: "bundle.js",
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};