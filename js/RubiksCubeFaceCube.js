/**
 * Builds an individual cube of a face of a Rubiks Cube
 * @constructor
 */
function RubiksCubeFaceCube() {
}

RubiksCubeFaceCube.prototype.color = NOCOLOR;

/**
 * Gets the color of the individual cube
 * @returns COLOR
 */
RubiksCubeFaceCube.prototype.getColor = function () {
    return this.color;
};