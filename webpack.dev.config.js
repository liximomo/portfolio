module.exports = {
  entry: "./src/pages/index.js",
  output: {
    path: __dirname,
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