/**
 * Builds an individual cube of a face of a Rubiks Cube
 * @constructor
 */
function RubiksCubeFaceCubie() {
}

RubiksCubeFaceCubie.prototype.tiles = [];

/**
 * Get the possible tiles part of our cubie
 * @returns {Array}
 */
function RubiksCubeFaceCubie.prototype.getTiles() {
    return this.tiles;
}