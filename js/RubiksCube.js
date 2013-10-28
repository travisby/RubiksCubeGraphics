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
 * Facial representation of our cube in order... B, L, D, R, F, U
 * @returns {Face[]}
 */
RubiksCube.prototype.getFaces = function() {
  var cubies = this._getCubies();

  return [
      new BackFace([cubies[0], cubies[1], cubies[2], cubies[3], cubies[4], cubies[5],cubies[6], cubies[7], cubies[8]]),
      new LeftFace([cubies[3], cubies[5], cubies[8], cubies[9], cubies[11], cubies[13], cubies[10], cubies[12], cubies[14]]),
      new DownFace([cubies[8], cubies[7], cubies[6], cubies[13], cubies[16], cubies[15], cubies[14], cubies[18], cubies[17]]),
      new RightFace([cubies[0], cubies[3], cubies[6], cubies[20], cubies[22], cubies[15], cubies[19], cubies[21], cubies[17]]),
      new FrontFace([cubies[14], cubies[28], cubies[17], cubies[12], cubies[24], cubies[21], cubies[10], cubies[23], cubies[19]]),
      new UpFace([cubies[2], cubies[1], cubies[0], cubies[9], cubies[25], cubies[20], cubies[11], cubies[23], cubies[19]])
  ];
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
  // sample file:
  /*
     GGW
     RRG
     RRG
  OWWGGOYYR
  OGOYYYRBR
  YYYRBGRWW
     BOY
     BOB
     BOB
     OGO
     WWB
     WWB
  */
  // TODO build from file
  var cube = new RubiksCube();

  return cube;
}
