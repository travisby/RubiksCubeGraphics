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

}

Face.prototype.turn = function() {
  // TODO
}

Face.prototype.draw = function() {
  // TODO
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