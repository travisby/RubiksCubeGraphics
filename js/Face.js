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
  cubies[0].move(-1, X_AXIS); cubies[0].move(1, Y_AXIS);
  cubies[1].move(1, Y_AXIS);
  cubies[2].move(1, X_AXIS); cubies[2].move(1, Y_AXIS);
  cubies[3].move(-1, X_AXIS);
  // cubies[4].move()
  cubies[5].move(1, X_AXIS);
  cubies[6].move(-1, X_AXIS); cubies[6].move(-1, Y_AXIS);
  cubies[7].move(-1, Y_AXIS);
  cubies[8].move(1, X_AXIS); cubies[8].move(-1, Y_AXIS);

}

Face.prototype = Object.create(Model.prototype);
Face.prototype.constructor = Face;
Face.prototype.DIRECTION = NODIRECTION;

Face.prototype.turn = function() {
    var cubies = this._getCubies();
  for (var i = 0; i < cubies.length; i++) {
      cubies[i].smoothOrbit(90, directionToAxis(this.DIRECTION));
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

function LeftFace(cubies) {
  Face.apply(this, [cubies]);
}
LeftFace.prototype = Object.create(Face.prototype);
LeftFace.prototype.constructor = Face;
LeftFace.prototype.DIRECTION = CUBE_LEFT;

function RightFace(cubies) {
  Face.apply(this, [cubies]);
}
RightFace.prototype = Object.create(Face.prototype);
RightFace.prototype.constructor = Face;
RightFace.prototype.DIRECTION = CUBE_RIGHT;

function FrontFace(cubies) {
  Face.apply(this, [cubies]);
}
FrontFace.prototype = Object.create(Face.prototype);
FrontFace.prototype.constructor = Face;
FrontFace.prototype.DIRECTION = CUBE_FRONT;

function DownFace(cubies) {
  Face.apply(this, [cubies]);
}
DownFace.prototype = Object.create(Face.prototype);
DownFace.prototype.constructor = Face;
DownFace.prototype.DIRECTION = CUBE_BOTTOM;

function UpFace(cubies) {
  Face.apply(this, [cubies]);
}
UpFace.prototype = Object.create(Face.prototype);
UpFace.prototype.constructor = Face;
UpFace.prototype.DIRECTION = CUBE_TOP;