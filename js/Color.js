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
NOCOLOR.u = 0;
WHITE = new White();
WHITE.u = 1;
RED = new Red();
RED.u = 2;
BLUE = new Blue();
BLUE.u = 3;
ORANGE = new Orange();
ORANGE.u = 4;
GREEN = new Green();
GREEN.u = 5;
YELLOW = new Yellow();
YELLOW.u = 6;

/**
 * Translates a character to a Color
 * @param {string} char
 * @returns Color
 */
function charToColor(char) {
  switch (char) {
    case 'W':
      return WHITE;
    case 'R':
      return RED;
    case 'B':
      return BLUE;
    case 'O':
      return ORANGE;
    case 'G':
      return GREEN;
    case 'Y':
      return YELLOW;
    default:
      return NOCOLOR;
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