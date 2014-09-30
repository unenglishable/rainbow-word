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
var pasta = rainbowWord.pattern({
  scheme: [
    {color: 'red', bgColor: 'bgYellow', styles: ['bold', 'underline']},
    {color: 'yellow', bgColor: 'bgGreen', style: ['bold']},
    {color: 'green', bgColor: 'bgRed', style: ['bold']},
    {color: 'red', bgColor: 'bgYellow', styles: ['bold', 'underline', 'inverse']},
    {color: 'yellow', bgColor: 'bgGreen', styles: ['bold', 'inverse']},
    {color: 'green', bgColor: 'bgRed', styles: ['bold', 'inverse']}]
});
console.log(pasta.convert(['pastafari', 'giant', 'flying', 'pasta', 'monstah', 'all', 'the', 'way', 'across', 'the', 'sky']));
var def = rainbowWord.pattern();

var thing = rainbow.convert(['double','rainbow','all','the','way','across','the','sky']);
console.log(thing);
var rastaThing = rasta.convert(['rasta','colors','all','the','way','across','the','sky']);
console.log(rastaThing);
console.log(def.convert(['a','b','c','d','e','f','g']));
console.log(rainbow.convert([
  'thing1: ' + 1 + ' ',
  'thing2: ' + 2 + ' ',
  'thing0: ' + 0 + ' ',
  'thing0: ' + 0
]));
