const CUBE_FRONT    = 0;
const CUBE_LEFT     = 1;
const CUBE_TOP      = 2;
const CUBE_RIGHT    = 3;
const CUBE_BACK     = 4;
const CUBE_BOTTOM   = 5;

const F    = 0;
const L     = 1;
const T      = 2;
const R    = 3;
const BA     = 4;
const BO   = 5;

var CubeColors = function(faces, colors) {
    this.colors = [];
    this.reset();
    this.massSet(faces, colors);
    return this.colors;
}

CubeColors.prototype.set = function(face, color) {
    this.colors[face] = color;
}

CubeColors.prototype.colors = [[0,0,0,1],  [0,0,0,1], [0,0,0,1], [0,0,0,1], [0,0,0,1], [0,0,0,1]];

CubeColors.prototype.massSet = function(faces, colors) {
    for(var i = 0; i < faces.length; i++) {
        this.colors[faces[i]] =  colors[i];
    }    
}
CubeColors.prototype.getColors = function() {
    return this.colors;
}

CubeColors.prototype.reset = function() {
    this.colors = [];
    for(var i = 0; i < 6; i++) {
        this.colors.push([0,0,0,1]);
    
    }
}

function NC() {
    return new CubeColors();
}
