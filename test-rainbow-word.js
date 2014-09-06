var rainbowWord = require('./rainbow-word');
var rainbow = rainbowWord.pattern({
  bold: true,
  save: true
});
var rasta = rainbowWord.pattern({
  bold: true,
  scheme: ['red', 'yellow', 'green']
});
var def = rainbowWord.pattern();

var thing = rainbow.color('double','rainbow','all','the','way','across','the','sky');
console.log(thing);
var rastaThing = rasta.color('rasta','colors','all','the','way','across','the','sky');
console.log(rastaThing);
console.log(def.color('a','b','c','d'));
console.log(rainbow.color(
  'thing1: ' + 1 + ' ',
  'thing2: ' + 2 + ' ',
  'thing0: ' + 0 + ' ',
  'thing0: ' + 0
));
