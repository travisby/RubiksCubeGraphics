/**
 * Generates a RubiksCube
 * @constructor
 */
function RubiksCube() {
    // TODO set faces
}

/**
 *
 * @type {Array}
 */
RubiksCube.prototype.faces = [];

/**
 * Returns the six faces of our rubiks cube
 * @returns {Array}
 */
RubiksCube.prototype.getFaces = function () {
    return this.faces;
};


/**
 * Rotate our cube so face is forward
 * @param face to turn to
 */
RubiksCube.prototype.turnToFace = function (face) {
    // TODO
    return;
};

/**
 * Builds a RubiksCube with a seed for the colors
 * @returns {RubiksCube}
 * @constructor
 */
function RubiksCubeFactory() {
    return new RubiksCube();
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