/**
 *
 * @param {Cubie[]} cubies
 * @constructor
 */
function Face(cubies) {

  // should be set in each subclass
  /**
   *
   * @type {DIRECTION}
   */
  var DIRECTION = NODIRECTION;

  /**
   *
   * @type {Cubie[]}
   */
  var myCubies = cubies;

  this._getCubies = function() {
    return myCubies;
  }

}

Face.prototype.turn = function() {
  // TODO
}

Face.prototype.draw = function() {
  // TODO
}

/**
 * Sets the colors of our Face
 * @param {String[]} colors
 */
Face.prototype.setColorsByString = function(colors) {

  var cubies = this._getCubies();
  // change colors string to actual colors
  colors = stringArrayToColorArray(colors);

  for (var i = 0; i < cubies.length; i++) {
    cubies[i].setColor(colors[i], DIRECTION);
  }
}

// B, L, D, R, F, U
function BackFace(cubies) {
  Face.apply(this, cubies);
}
BackFace.prototype = new Face();
BackFace.prototype.constructor = Face;

function LeftFace(cubies) {
  Face.apply(this, cubies);
}
LeftFace.prototype = new Face();
LeftFace.prototype.constructor = Face;

function RightFace(cubies) {
  Face.apply(this, cubies);
}
RightFace.prototype = new Face();
RightFace.prototype.constructor = Face;

function FrontFace(cubies) {
  Face.apply(this, cubies);
}
FrontFace.prototype = new Face();
FrontFace.prototype.constructor = Face;

function DownFace(cubies) {
  Face.apply(this, cubies);
}
DownFace.prototype = new Face();
DownFace.prototype.constructor = Face;

function UpFace(cubies) {
  Face.apply(this, cubies);
}
UpFace.prototype = new Face();
UpFace.prototype.constructor = Face;

/**
 * Converts an array of characters like ['O', 'B', 'W'] into colors like [new Orange(), new Blue(), new White()]
 * @param {String[]} colors
 * @returns {Color[]}
 */
function stringArrayToColorArray(colors) {

  var newColors = [];

  for (var i = 0; i <= colors.length; i++) {
    switch (colors[i]) {
      case 'G':
        newColors[i] = GREEN;
        break;
      case 'W':
        newColors[i] = WHITE;
        break;
      case 'R':
        newColors[i] = RED;
        break;
      case 'O':
        newColors[i] = ORANGE;
        break;
      case 'Y':
        newColors[i] = YELLOW;
        break;
      case 'B':
        newColors[i] = BLUE;
      default:
        newColors[i] = NOCOLOR;
    }

  }
  return newColors;
}