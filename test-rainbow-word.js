var rainbowWord = require('./rainbow-word');
var defaultPattern = rainbowWord.pattern();
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

var defaultWords = ['a','b','c','d','e','f','g'];
var rainbowWords = ['double','rainbow','all','the','way','across','the','sky'];
var rastaWords = ['rasta','colors','all','the','way','across','the','sky'];
var pastaWords = ['pastafari', 'giant', 'flying', 'pasta', 'monstah', 'all', 'the', 'way', 'across', 'the', 'sky'];
var exampleWords = [
  'thing1: ' + 1 + ' ',
  'thing2: ' + 2 + ' ',
  'thing0: ' + 0 + ' ',
  'thing0: ' + 0
];

console.log(defaultPattern.convert(defaultWords));
console.log(rainbow.convert(rainbowWords));
console.log(rasta.convert(rastaWords));
console.log(pasta.convert(pastaWords));
console.log(rainbow.convert(exampleWords));
