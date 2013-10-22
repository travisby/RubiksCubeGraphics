/**
 * An individual tile on a Face Cubie
 * @constructor
 */
function RubiksCubeFaceCubieTile() {
}

RubiksCubeFaceCubieTile.prototype.color = NOCOLOR;

/**
 * Get the color of this tile
 * @returns COLOR
 */
RubiksCubeFaceCubieTile.prototype.getColor = function() {
    return this.color;
}