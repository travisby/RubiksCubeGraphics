/**
 * Stores color information... meant to be statically loaded.
 * @constructor
 */
function Color() {
}
Color.prototype.r = 0.0;
Color.prototype.g = 0.0;
Color.prototype.b = 0.0;
Color.prototype.alpha = 1.0;

function White() {
}
White.prototype = new Color();
White.prototype.r = 1.0;
White.prototype.g = 1.0;
White.prototype.b = 1.0;

function Red() {
}
Red.prototype = new Color();
Red.prototype.r = 1.0;
Red.prototype.g = 0.0;
Red.prototype.b = 0.0;

function Blue() {
}
Blue.prototype = new Color();
Blue.prototype.r = 0.0;
Blue.prototype.g = 0.0;
Blue.prototype.b = 1.0;

function Orange() {
}
Orange.prototype = new Color();
Orange.prototype.r = 1.0;
Orange.prototype.g = 0.5;
Orange.prototype.b = 0.0;

function Green() {
}
Green.prototype = new Color();
Green.prototype.r = 0.0;
Green.prototype.g = 1.0;
Green.prototype.b = 0.0;

function Yellow() {
}
Yellow.prototype = new Color();
Yellow.prototype.r = 1.0;
Yellow.prototype.g = 1.0;
Yellow.prototype.b = 0.0;

NOCOLOR = new Color();
WHITE = new White();
RED = new Red();
BLUE = new Blue();
ORANGE = new Orange();
GREEN = new Green();
YELLOW = new Yellow();

/**
 * Translates a character to a Color
 * @param {string} char
 * @returns Color
 */
function charToColor(char) {
  switch (char) {
    case 'W':
      return [1,1,1,1];
    case 'R':
      return [1,0,0,1];
    case 'B':
      return [0,0,1,1];
    case 'O':
      return [1,.5,0,1];
    case 'G':
      return [0,1,0,1];
    case 'Y':
      return [1,1,0,1];
    default:
      return [0,0,0,1];
  }
}

/**
 * Converts an array of characters like ['O', 'B', 'W'] into colors like [new Orange(), new Blue(), new White()]
 * @param {string[]} colors
 * @returns {Color[]}
 */
function charsToColors(colors) {

  var newColors = [];

  for (var i = 0; i <= colors.length; i++) {
    newColors[i] = charToColor(colors[i]);
  }
  return newColors;
}
