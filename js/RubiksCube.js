/**
 * Generates a RubiksCube
 * @constructor
 */
function RubiksCube() {

}

RubiksCube.prototype.getFaces = function() {
  // TODO
}

RubiksCube.prototype.draw = function() {
  this.getFaces().draw();
}
/**
 * Builds a RubiksCube by using a file handle to get the colors
 * @param file handle to build from
 * @returns {RubiksCube}
 * @constructor
 */
function RubiksCubeFactoryFromFile(file) {
    // TODO build from file
    return new RubiksCube();
}
