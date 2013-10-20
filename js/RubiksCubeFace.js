/**
 * Generates one face of a Rubiks Cube
 *
 * A face is defined by its color
 * @constructor
 */
function RubiksCubeFace() {
}

RubiksCubeFace.prototype.cubes = [];


/**
 * Get the individual cubes of a cube
 * @returns {Array}
 */
RubiksCube.prototype.getCubes = function () {
    return this.cubes;
};

/**
 * Get the color of our Face
 * @returns COLOR
 */
RubiksCubeFace.prototype.getColor = function () {
    // We use the center cube to define the color of our Face
    return this.cubes[(this.cubes.length - 1) / 2].getColor();
};

/**
 * Turns the face 90 degrees
 */
RubiksCubeFace.prototype.turn = function () {
};