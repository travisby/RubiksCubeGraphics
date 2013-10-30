/**
 *
 * @param {Cubie[]} cubies
 * @constructor
 */
function Face(cubies) {
  Model.apply(this, []);
  // should be set in each subclass

  /**
   *
   * @type {Cubie[]}
   */
  var myCubies = cubies;
  this.setDrawables(cubies);
  this._getCubies = function() {
    return myCubies;
  }




}

Face.prototype = Object.create(Model.prototype);
Face.prototype.constructor = Face;
Face.prototype.DIRECTION = NODIRECTION;
Face.prototype.u = -1;

Face.prototype.turn = function() {
    var cubies = this._getCubies();
  for (var i = 0; i < cubies.length; i++) {
      cubies[i].smoothOrbit(90, directionToAxisForStarting(this.DIRECTION));
  }
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
  colors = charsToColors(colors);

    console.log("test ");
    console.log(cubies);
  for (var i = 0; i < cubies.length; i++) {
    cubies[i].setColor(colors[i], this.DIRECTION);
  }
}


// B, L, D, R, F, U
function BackFace(cubies) {
  Face.apply(this, [cubies]);
}
BackFace.prototype = Object.create(Face.prototype);
BackFace.prototype.constructor = Face;
BackFace.prototype.DIRECTION = CUBE_BACK;
BackFace.prototype.numtoMoveInMyDirection = -1;
BackFace.prototype.numDegreesToMove = 0;
BackFace.prototype.u = 0;

function LeftFace(cubies) {
  Face.apply(this, [cubies]);;
}
LeftFace.prototype = Object.create(Face.prototype);
LeftFace.prototype.constructor = Face;
LeftFace.prototype.DIRECTION = CUBE_LEFT;
LeftFace.prototype.numtoMoveInMyDirection = -1;
LeftFace.prototype.numDegreesToMove = 90;
LeftFace.prototype.u = 1;

function RightFace(cubies) {
  Face.apply(this, [cubies]);
}
RightFace.prototype = Object.create(Face.prototype);
RightFace.prototype.constructor = Face;
RightFace.prototype.DIRECTION = CUBE_RIGHT;
RightFace.prototype.numtoMoveInMyDirection = 1;
RightFace.prototype.numDegreesToMove = 90;
RightFace.prototype.u = 3;

function FrontFace(cubies) {
  Face.apply(this, [cubies]);
}
FrontFace.prototype = Object.create(Face.prototype);
FrontFace.prototype.constructor = Face;
FrontFace.prototype.DIRECTION = CUBE_FRONT;
FrontFace.prototype.numtoMoveInMyDirection = 1;
FrontFace.prototype.numDegreesToMove = 0;
FrontFace.prototype.u = 4;

function DownFace(cubies) {
  Face.apply(this, [cubies]);
}
DownFace.prototype = Object.create(Face.prototype);
DownFace.prototype.constructor = Face;
DownFace.prototype.DIRECTION = CUBE_BOTTOM;
DownFace.prototype.numtoMoveInMyDirection = -1;
DownFace.prototype.numDegreesToMove = 90;
DownFace.prototype.u = 2;

function UpFace(cubies) {
  Face.apply(this, [cubies]);
}
UpFace.prototype = Object.create(Face.prototype);
UpFace.prototype.constructor = Face;
UpFace.prototype.DIRECTION = CUBE_TOP;
UpFace.prototype.numtoMoveInMyDirection = 1;
UpFace.prototype.numDegreesToMove = 90;
UpFace.prototype.u = 5;