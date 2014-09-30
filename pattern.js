var chalk = require('chalk');
var defaults = {
  color: '',
  bgColor: '',
  scheme: [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'green'},
    {color: 'blue'},
    {color: 'magenta'}],
  styles: [],
  save: false
}

var Pattern = function(options) {
  this.position = 0;
  if (options) {
    this.color = options.color || defaults.color;
    this.bgColor = options.bgColor || defaults.bgColor;
    this.scheme = options.scheme || defaults.scheme;
    this.styles = options.style ? [options.style] : (options.styles || defaults.styles);
    this.save = options.save || defaults.save;
  }
  else {
    for (defaultValue in defaults) {
      this[defaultValue] = defaults[defaultValue];
    }
  }
};

Pattern.prototype.convert = function(words) {
  var self = this;
  var i = this.position;
  var result = '';
  words.forEach(function(word) {
    var current = word;
    var color = self.color;
    var bgColor = self.bgColor;
    if (self.scheme[i].color) {
      color = self.scheme[i].color;
    }
    if (self.scheme[i].bgColor) {
      bgColor = self.scheme[i].bgColor;
    }
    if (color) {
      current = chalk[color](current);
    }
    if (bgColor) {
      current = chalk[bgColor](current);
    }
    var styles = self.styles;
    if (self.scheme[i].style) {
      styles = [self.scheme[i].style]
    }
    else if (self.scheme[i].styles) {
      styles = self.scheme[i].styles;
    }
    styles.forEach(function(style) {
      current = chalk[style](current);
    });
    result = result.concat(current);
    i++;
    i %= self.scheme.length;
  });
  if (this.save) {
    this.position = i;
  }

  return result;
};

module.exports = function (options) {
  return new Pattern(options);
};
