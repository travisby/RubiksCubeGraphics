function Cubie() {
  var x = 0;
  var y = 0;
  var z = 0;

  /**
   * Contains individual tiles of a cube
   * In order...
   * -Y
   * +Y
   * -X
   * +X
   * +Z
   * -Z
   * @type {Tile[]}
   */
  var tiles = [];

  this._getX = function() {
    return x;
  };

  this._getY = function() {
    return y;
  };

  this._getZ = function() {
    return z;
  };

  this._setX = function(xPos) {
    x = xPos;
  };

  this._setY = function(yPos) {
    y = yPos;
  };

  this._setZ = function(zPos) {
    z = zPos;
  };

  this._setTiles = function(newTiles) {
    tiles = newTiles
  }

  this._getTiles = function() {
    return tiles;
  }

}

/**
 * Changes our coordinates
 * @param {Vec3} vec3
 */
Cubie.prototype.setCoords = function(vec3) {
  this._setX(vec3.x);
  this._setY(vec3.y);
  this._setZ(vec3.z);
}

/**
 * Vector of our coords
 * @returns {Vec3}
 */
Cubie.prototype.getCoords = function() {
  return new Vec3([this._getX(), this._getY(), this._getZ()]);
}

/**
 *
 * @param tiles
 * @returns {Tile[]}
 */
Cubie.prototype.setTiles = function(tiles) {
  return this._setTiles(tiles);
}

Cubie.prototype.draw = function() {

  /**
   *
   * @type {Tile[]}
   */
  var tiles = this._getTiles();
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].draw();
  }
}

/**
 * Changes the color of a particular tile of a cube
 * @param {Color} color
 * @param {Direction} direction
 */
Cubie.prototype.setColor = function(color, direction) {
  // TODO
}