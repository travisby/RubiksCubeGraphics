/**
 *
 * @param {Cubie[]} cubies
 * @constructor
 */
function Face(cubies) {
  /**
   *
   * @type {Cubie[]}
   */
  var myCubies = cubies;
  this.setDrawables(myCubies);
  this._getCubies = function() {
    return myCubies;
  }

}

Face.prototype.turn = function() {
  // TODO
}

Face.prototype = new Model();
Face.prototype.constructor = Face;
Face.prototype.DIRECTION = null;

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
  colors = charsToColors(colors);

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
BackFace.prototype.DIRECTION = CUBE_BACK;

function LeftFace(cubies) {
  Face.apply(this, cubies);
}
LeftFace.prototype = new Face();
LeftFace.prototype.constructor = Face;
LeftFace.prototype.DIRECTION = CUBE_LEFT;

function RightFace(cubies) {
  Face.apply(this, cubies);
}
RightFace.prototype = new Face();
RightFace.prototype.constructor = Face;
RightFace.prototype.DIRECTION = CUBE_RIGHT;

function FrontFace(cubies) {
  Face.apply(this, cubies);
}
FrontFace.prototype = new Face();
FrontFace.prototype.constructor = Face;
FrontFace.prototype.DIRECTION = CUBE_FRONT;

function DownFace(cubies) {
  Face.apply(this, cubies);
}
DownFace.prototype = new Face();
DownFace.prototype.constructor = Face;
DownFace.prototype.DIRECTION = CUBE_BOTTOM;

function UpFace(cubies) {
  Face.apply(this, cubies);
}
UpFace.prototype = new Face();
UpFace.prototype.constructor = Face;
UpFace.prototype.DIRECTION = CUBE_TOP;
