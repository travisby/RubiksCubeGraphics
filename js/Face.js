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
   * @type {DIRECTION}
   */
   DIRECTION = NODIRECTION;

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
    
Face.prototype.turn = function() {
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

function LeftFace(cubies) {
  Face.apply(this, [cubies]);
}
LeftFace.prototype = Object.create(Face.prototype);
LeftFace.prototype.constructor = Face;

function RightFace(cubies) {
  Face.apply(this, [cubies]);
}
RightFace.prototype = Object.create(Face.prototype);
RightFace.prototype.constructor = Face;

function FrontFace(cubies) {
  Face.apply(this, [cubies]);
}
FrontFace.prototype = Object.create(Face.prototype);
FrontFace.prototype.constructor = Face;

function DownFace(cubies) {
  Face.apply(this, [cubies]);
}
DownFace.prototype = Object.create(Face.prototype);
DownFace.prototype.constructor = Face;

function UpFace(cubies) {
  Face.apply(this, [cubies]);
}
UpFace.prototype = Object.create(Face.prototype);
UpFace.prototype.constructor = Face;
