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
 * Get the color of our Face, which is defined by the center cubie
 * @returns {Color}
 */
Face.prototype.getColor = function() {
  return this._getCubies()[4].getColor();
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
