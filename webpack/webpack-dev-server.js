const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const config = require('./webpack.config')

const port = (+process.env.PORT + 1) || 3001
const ip = process.env.IP || '0.0.0.0'

const compiler = webpack(config)

/*  Creates a server to serve static assets */
const server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  host: ip,
  stats: false,
  historyApiFallback: true,
  contentBase: 'public',
  compress: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
})

server.listen(port, ip, (err) => console.log(err ? err : `Listening at http://${ip}:${port}`))