function Cubie() {
  Model.apply(this, []);
  
  var colors = new CubeColors();

  var x = 0;
  var y = 0;
  var z = 0;
  var fancySolidCube = new FancySolidCube(this.material, colors);
  this.add(fancySolidCube);
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

    /**
     *
     * @returns {CubeColors}
     * @private
     */
  this._getColors = function() {
      return colors;
  }

  this._setFancySolidCube = function(newFancySolidCube) {
      fancySolidCube = newFancySolidCube;
  }
}

Cubie.prototype = Object.create(Model.prototype);
Cubie.prototype.constructor = Cubie;

Cubie.prototype.material = new Material(new vec4(.1,.1,.1,.1), vec4(1,1,1,1), vec4(1,1,1,1), 10);

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
 * @returns {vec3}
 */
Cubie.prototype.getCoords = function() {
  return new vec3([this._getX(), this._getY(), this._getZ()]);
}

/**
 * Changes the color of a particular tile of a cube
 * @param {Color} color
 * @param {Direction} direction
 */
Cubie.prototype.setColor = function(color, direction) {
    this._getColors().set(direction, color);
    this._setFancySolidCube(new FancySolidCube(this.material, this._getColors()));


}
