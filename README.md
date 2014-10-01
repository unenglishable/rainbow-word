# rainbow-word

A node module that uses chalk.js to write strings in a colored/stylized pattern.

### package.json

````
{
  ...
  "dependencies": {
    ...
    "rainbow-word": "git://github.com/unenglishable/rainbow-word",
    ...
  },
  ...
}
````

## Usage

````
var rw = require('rainbow-word');
````

### Pattern


````
var rw = require('rainbow-word');
var rainbow = rw.pattern(options);
rainbow.convert('Hello', 'World', ...);
````

#### .convert(string1, string2, ...);
`.convert()` will combine all arguments supplied to it into
a single string.  Cycling through elements in the `scheme`
array, it converts each argument accordingly.

For a complete list of colors and styles, see the
[chalk.js](https://github.com/sindresorhus/chalk) git repo.

````
// Use the default pattern
var default = rw.pattern();
/*
 *  color: '',
 *  scheme: [
 *    {color: 'red'},
 *    {color: 'yellow'},
 *    {color: 'green'},
 *    {color: 'blue'},
 *    {color: 'magenta'}],
 *  styles: [],
 *  save: false
 */

// Supply options to the pattern constructor
var options = {
  color: 'red',
  bgColor: 'bgWhite',
  style: 'bold,
  styles: ['bold', 'underline', ...],
  scheme: [
    {color: 'red', bgColor: 'bgWhite', style: 'bold', styles: ['bold', 'underline', ...]},
    {color: 'blue', style: 'bold'},
    {color: 'white', styles: ['bold', 'underline', ...]},
    {color: 'black'},
    ... ];
  save: true
}
````

Options are parsed as follows:

* Anything provided in the scheme has priority (overrides other options)

* `style` overrides `styles`

* If color is not provided in scheme, color option will be used.

* bgColor behaves the same way as color

* If style/styles is/are not provided in scheme, style/styles option will be used.

* If nothing is provided, defaults will be used

The `save` option specifies that the `pattern` should keep
track of the last element in the `scheme` it used and
continue there on the next call to `.convert()`.  If `save`
is false, the position is reset after each call to `.convert()`.

## Examples

See the [example file](./examples.js) for examples.
