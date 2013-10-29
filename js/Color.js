function Color() {
}

function White() {
}
White.prototype = new Color();

function Red() {
}
Red.prototype = new Color();

function Blue() {
}
Blue.prototype = new Color();

function Orange() {
}
Orange.prototype = new Color();

function Green() {
}
Green.prototype = new Color();

function Yellow() {
}
Yellow.prototype = new Color();

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