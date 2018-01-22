var express = require('express'),
  webpack = require('webpack'),
  PATHS = require('./config/PATHS'),
  PORTS = require('./config/PORTS'),
  config = require('./webpack.dev.conf'),
  proxy = require('http-proxy-middleware'),
  app = express();

var compiler = webpack(config);

// Serve static during dev
app.use('/static', express.static(PATHS.STATIC));

//Mock server
app.use('/OperationWeb/', proxy({
  target: 'http://10.200.133.26:9030/',
  changeOrigin: true,
  pathRewrite: {
    '^/OperationWeb/': 'http://10.200.133.26:9030/'
  }
}));

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler));

app.listen(PORTS.DEV_SERVER);
