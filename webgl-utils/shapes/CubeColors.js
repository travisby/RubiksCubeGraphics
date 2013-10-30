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

CubeColors.prototype.FACE_CONSTANTS = [CUBE_FRONT, CUBE_LEFT, CUBE_TOP, CUBE_RIGHT, CUBE_BACK, CUBE_BOTTOM];

CubeColors.prototype.getColors = function() {
    var myColors = [];
    for (var i = 0; i < this.FACE_CONSTANTS.length; i++) {
        myColors[i] = [this.colors[i].r, this.colors[i].g, this.colors[i].b, this.colors[i].alpha];
    }
    return myColors;
}

CubeColors.prototype.set = function(face, color) {
    this.colors[face] = color;
}

CubeColors.prototype.reset = function() {
    this.colors = [];
    for(var i = 0; i < this.FACE_CONSTANTS; i++) {
        this.colors.push(NOCOLOR);
    }
}
