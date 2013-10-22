//I'm just making sure I can git.


/**
 * Generates a RubiksCube
 * @constructor
 */
function RubiksCube() {
    // TODO set faces
    var faces = [];

    /**
     * Returns the six faces of our RubiksCube
     * @returns {Array}
     */
    this.getFaces = function () {
        return faces;
    };

    /**
     * Rotate our cube so face is forward
     * @param face to turn to
     */
    this.turnToFace = function (face) {
        // TODO
        return;
    }
}

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
