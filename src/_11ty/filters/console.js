const util = require('util');

module.exports = value => {
  const str = util.inspect(value);
  return `<div style="white-space: pre-wrap;">${unescape(str)}</div>;`
}