var colors = require('colors');
var defaults = {
  scheme: ['red', 'yellow', 'green', 'blue', 'magenta'],
  save: false,
  bold: false
}

var Pattern = function(options) {
  this.position = 0;
  if (options) {
    this.scheme = options.scheme || defaults.scheme;
    this.bold = options.bold || defaults.bold;
    this.save = options.save || defaults.save;
  }
  else {
    for (defaultValue in defaults) {
      this[defaultValue] = defaults[defaultValue];
    }
  }
};

Pattern.prototype.color = function() {
  var self = this;
  var i = this.position;
  var words = Array.prototype.slice.call(arguments);
  var result = '';
  words.forEach(function(word) {
    result = result.concat(word[self.scheme[i++ % self.scheme.length]]);
  });
  if (this.save) {
    this.position = i;
  }

  result = this.bold ? result.bold : result;
  return result;
};

module.exports = function (options) {
  return new Pattern(options);
};
