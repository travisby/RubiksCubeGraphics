/**
 * An individual tile on a Face Cubie
 * @constructor
 */
function Tile() {

  /**
   * Tile's color
   * @type {Color}
   */
  var color = NOCOLOR;

  /**
   * Get the color of this tile
   * @returns {Color}
   */
  this._getColor = function () {
      return color;
  }

  this._setColor = function(newColor) {
    color = newColor;
  }
}

Tile.getColor = function() {
  return this._getColor();
}

Tile.setColor = function(color) {
  this._setColor(color);
}

Tile.draw = function() {
  // TODO
}