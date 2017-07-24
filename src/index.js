require('babel-polyfill')
require('babel-core/register')({
  plugins: ['transform-es2015-modules-commonjs']
})

require('./server')

console.log(123)