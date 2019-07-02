const path = require('path')

module.exports = {
  APP_PATH: path.resolve(__dirname, '../src/main.js'),
  OUTPUT_PATH: path.resolve(__dirname, '../dist'),
  HTML_TEMPLATE_PATH: path.resolve(__dirname, '../src/html')
}