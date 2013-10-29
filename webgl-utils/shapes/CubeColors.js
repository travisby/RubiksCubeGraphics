const CUBE_FRONT    = 0;
const CUBE_LEFT     = 1;
const CUBE_TOP      = 2;
const CUBE_RIGHT    = 3;
const CUBE_BACK     = 4;
const CUBE_BOTTOM   = 5;

var CubeColors = function() {
    this.colors = [];
    this.reset();
}

CubeColors.prototype.getColors = function() {
    return this.colors;
}

CubeColors.prototype.set = function(face, color) {
    this.colors[face] = color;
}

CubeColors.prototype.reset = function() {
    this.colors = [];
    for(var i in this.colors) {
        this.colors.push([0.0, 0.0, 0.0, 1.0]);
    }
}
