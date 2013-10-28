/**
 * Generates a RubiksCube
 * @constructor
 */
function RubiksCube() {
  /**
   *
   * @type {Cubie[]}
   */
  var cubies = [];

  // Create our cubies
  for (var i = 0; i <= 27; i++) {
    cubies[i] = new Cubie();
  }

  this._getCubies = function() {
    return cubies;
  }

}

/**
 * Facial representation of our cube in order... U, D, F, B, L, R
 * @returns {Face[]}
 */
RubiksCube.prototype.getFaces = function() {
  // TODO actually faces
  return [new Face(), new Face(), new Face(), new Face(), new Face(), new Face()];
}

RubiksCube.prototype.draw = function() {
  var faces = this.getFaces();

  for (var i = 0; i < faces.length; i++) {
    faces[i].draw();
  }
}
/**
 * Builds a RubiksCube by using a file handle to get the colors
 * @param file handle to build from
 * @returns {RubiksCube}
 * @constructor
 */
function RubiksCubeFactoryFromFile(file) {
  // TODO build from file
  var cube = new RubiksCube();

  return cube;
}
