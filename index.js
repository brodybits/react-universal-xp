/** detects if this is in a browser or Node.js web server */
var isWeb = (!!global.document || require('is-node'))

var universalExports = isWeb
  ? require('react-native-web')
  : require('react-native')

module.exports = universalExports
