var rainbowWord = require('./rainbow-word');
var rainbow = rainbowWord.pattern({
  style: 'bold',
  styles: 'underline',
  save: true
});
var rasta = rainbowWord.pattern({
  scheme: [
    {color: 'red', styles: ['bold', 'underline']},
    {color: 'yellow', style: 'bold', styles: ['bold', 'underline']},
    {color: 'green', styles: ['inverse']}]
});
var def = rainbowWord.pattern();

var thing = rainbow.convert('double','rainbow','all','the','way','across','the','sky');
console.log(thing);
var rastaThing = rasta.convert('rasta','colors','all','the','way','across','the','sky');
console.log(rastaThing);
console.log(def.convert('a','b','c','d','e','f','g'));
console.log(rainbow.convert(
  'thing1: ' + 1 + ' ',
  'thing2: ' + 2 + ' ',
  'thing0: ' + 0 + ' ',
  'thing0: ' + 0
));
