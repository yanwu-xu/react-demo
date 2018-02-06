
var fs = require('fs-extra'),
  webpack = require('webpack'),
  PATHS = require('./config/PATHS'),
  config = require('./webpack.prod.conf'),
  chalk = require('chalk');

fs.emptyDirSync(PATHS.DIST);
fs.copySync(PATHS.STATIC, PATHS.DIST.join('static'));

webpack(config, function(err, stats) {
  // show build info to console
  //console.log(stats.toString({ chunks: false, color: true }));
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
});
