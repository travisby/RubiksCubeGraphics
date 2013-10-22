/**
 * Builds an individual cube of a face of a Rubiks Cube
 * @constructor
 */
function RubiksCubeFaceCubie() {

    var tiles = [];

    /**
     * Get the possible tiles part of our cubie
     * @returns {Array}
     */

    this.getTiles = function () {
        return tiles;
    }
}