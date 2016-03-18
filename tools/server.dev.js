var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.dev.config');

console.log('Starting server...\n');

new WebpackDevServer(webpack(config), { // Start a server
  historyApiFallback: true,
  devtool: 'eval',
  quiet: false,
  noInfo: false,

  publicPath: config.output.publicPath
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server started');
    console.log('Listening at localhost:3000');
  }
});