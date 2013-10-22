/**
 * Generates one face of a Rubiks Cube
 *
 * A face is defined by its color
 * @constructor
 */
function RubiksCubeFace() {
    var cubies = [];

    /**
     * Get the individual cubes of a cube
     * @returns {Array}
     */
    this.getCubies = function () {
        return cubies;
    };

    /**
     * Get the color of our Face
     * @returns COLOR
     */
    this.getColor = function () {
        // We use the center cube to define the color of our Face
        return cubies[(cubies.length - 1) / 2].getColor();
    };

    /**
     * Turns the face 90 degrees
     */
    this.turn = function () {
        // TODO
    }
}