/**
 * Individual Cube in a RubiksCube
 * @constructor
 */
function Cubie() {
  Model.apply(this, []);
  var colors = new CubeColors();

  var x = 0;
  var y = 0;
  var z = 0;
  var fancySolidCube = new FancySolidCube(this.material, colors);
  this.add(fancySolidCube);

    /**
     * Returns the color object
     * @returns {CubeColors}
     * @private
     */
  this._getColors = function() {
      return colors;
  }

  /**
   * Updates our FancySolidCube
   * @param newFancySolidCube
   * @private
   */
  this._setFancySolidCube = function(newFancySolidCube) {
      fancySolidCube = newFancySolidCube;
      this.setDrawables([]);
      this.add(fancySolidCube);
  }
}

Cubie.prototype = Object.create(Model.prototype);
Cubie.prototype.constructor = Cubie;

Cubie.prototype.material = new Material(new vec4(.1,.1,.1,.1), vec4(1,1,1,1), vec4(1,1,1,1), 10);

/**
 * Changes the color of a particular tile of a cube
 * @param {Color} color
 * @param {Direction} direction
 */
Cubie.prototype.setColor = function(color, direction) {
    this._getColors().set(direction, color);
    this._setFancySolidCube(new FancySolidCube(this.material, this._getColors()));
}
