/**
 * An individual tile on a Face Cubie
 * @constructor
 */
function RubiksCubeFaceCubieTile() {
    var color = NOCOLOR;

    /**
     * Get the color of this tile
     * @returns COLOR
     */
    this.getColor = function () {
        return color;
    }
}