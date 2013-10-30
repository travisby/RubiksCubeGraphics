/**
 * Simple WebGL Cube
 * @param {Material} material
 * @param {CubeColors} colors
 * @constructor
 */
function SolidCube(material, colors) {
    SolidCuboid.apply(this, [material, colors, 1, 1, 1]);
}

SolidCube.prototype = Object.create(SolidCuboid.prototype);
SolidCube.prototype.constructor = SolidCube;
