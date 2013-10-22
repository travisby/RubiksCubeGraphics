/**
 * Generates one face of a Rubiks Cube
 *
 * A face is defined by its color
 * @constructor
 */
function RubiksCubeFace() {
}

RubiksCubeFace.prototype.cubies = [];


/**
 * Get the individual cubes of a cube
 * @returns {Array}
 */
RubiksCube.prototype.getCubies = function () {
    return this.cubies;
};

/**
 * Get the color of our Face
 * @returns COLOR
 */
RubiksCubeFace.prototype.getColor = function () {
    // We use the center cube to define the color of our Face
    return this.cubies[(this.cubies.length - 1) / 2].getColor();
};

/**
 * Turns the face 90 degrees
 */
RubiksCubeFace.prototype.turn = function () {
};