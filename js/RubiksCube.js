/**
 * Rubiks Cube abstraction
 * @param {CubeColors} colors
 * @constructor
 */
function RubiksCube(colors) {
    Model.apply(this, []);
    this.colors = colors; 
    this.cubes = [];
    var count = 0;
    var mat = new Material(vec4(1,1,1,1), vec4(.1,.1,.1,1), vec4(1,1,1,1), 10);

    // set each cube
    for(var x = 0; x <= 2; x++) {
        this.cubes[x] = [];
       
         for(var y = 0; y <= 2; y++) {
            this.cubes[x][y] = [];
             for(var z = 0; z <= 2; z++) {
                var c = this.colors[count];
                if(x == 1 && y == 1 && z == 1) {
                    x;  // pass
                }
                else {
                    count++;
           
                    this.cubes[x][y][z] = new FancySolidCube(mat, c);
                    this.add(this.cubes[x][y][z]);
                    this.cubes[x][y][z].move((x - 1) * 1.1, X_AXIS);
                    this.cubes[x][y][z].move((y - 1) * 1.1, Y_AXIS);
                    this.cubes[x][y][z].move((z - 1) * 1.1, Z_AXIS);
                }
            }
        }    
    } 
}

RubiksCube.prototype = Object.create(Model.prototype);
RubiksCube.prototype.constructor = RubiksCube;

/**
 * Turns the rubiks cube based on a string... "O3W1" meaning "Turn orange three times, White one time"
 * @param {string} str
 */
RubiksCube.prototype.turnByString = function(str) {
  var movesQueue = [];
  /**
   *
   * @type {Face[]}
   */
  var faceColorsInOrder = [];

  /**
   *
   * @type {int[]}
   */
  var numTurnsInOrder = [];
  var index = 0;

  // fill faceColorsInOrder and numTurnsInOrder
  for (var i = 0; i < str.length; i += 2) {
    faceColorsInOrder[index] = str[i].toLowerCase();
    numTurnsInOrder[index] = parseInt(str[i + 1]);
    index++;
  }

  // for every face...
  for (var i = 0; i < faceColorsInOrder.length; i++) {

    while (numTurnsInOrder[i] > 0) {
      movesQueue.push(faceColorsInOrder[i]);
      numTurnsInOrder[i]--;
    }
  }

  // FINISH HIM... TAKE THAT ASYNCHRONOUS JAVASCRIPT CALLS
  var finisher = function() {
    rubiksCube.turnFace(movesQueue.shift());
    if(movesQueue.length > 0) {
      setTimeout(finisher, 1000);
    }
  };

  if (movesQueue.length > 0) {
    finisher();
  }
}


/**
 * Turns an individual face of a cube, denoted by the starting letter of its center cube
 * @param {char} face
 */
RubiksCube.prototype.turnFace = function (face) {
  console.log(face);
  if(face == 'b') {
        this.rotateColumn(2,1);
    }    
    else if(face == 'g') {
        this.rotateColumn(0,1);
    }
    else if(face == 'r') {
        this.rotateDepth(0,0);
    }
    else if(face == 'o') {
        this.rotateDepth(2,0);
    }
    else if(face == 'w') {
        this.rotateRow(2,1);
    }
    else if(face == 'y') {
        this.rotateRow(0,1);
    }
}
/**
 * Rotates just one individual row
 * @param {Cube[]} row
 * @param {Cube[]} dir
 */
RubiksCube.prototype.rotateRow = function(row, dir) {
    for(var x = 0; x < this.cubes.length; x++) {
        for(var z = 0; z < this.cubes[x][row].length; z++) {
            if(dir === 0) {
                    this.cubes[x][row][z].smoothOrbit(90, Y_AXIS);
            }
            else {
                    this.cubes[x][row][z].smoothOrbit(-90, Y_AXIS);
            }
        }
    }
    this.swapRow(row, dir);
    
}

/**
 * Rotates an individual row in the Z direction
 * @param {Cube[]} row
 * @param {Number} dir
 */
RubiksCube.prototype.rotateDepth = function(row, dir) {
    
    for(var x = 0; x < this.cubes.length; x++) {
        for(var y = 0; y < this.cubes[x].length; y++) {
            if(dir === 0) {
                    this.cubes[x][y][row].smoothOrbit(90, Z_AXIS);
            }
            else {
                    this.cubes[x][y][row].smoothOrbit(-90, Z_AXIS);
            }
        }
    }
    this.swapDepth(row, dir);
}

/**
 * Switches Cubies
 * @param {Cubie[]} row
 * @param {Number} dir
 */
RubiksCube.prototype.swapDepth = function(row, dir) {

    var top =       this.cubes[1][2][row];
    var bottom =    this.cubes[1][0][row];
    var left =      this.cubes[0][1][row];
    var right =     this.cubes[2][1][row];
    
    var topLeft =       this.cubes[0][2][row];
    var bottomLeft =    this.cubes[0][0][row];
    var bottomRight =   this.cubes[2][0][row];
    var topRight =      this.cubes[2][2][row];
    
    if(dir === 0) {
        this.cubes[1][2][row] = right;
        this.cubes[0][1][row] = top;
        this.cubes[1][0][row] = left;
        this.cubes[2][1][row] = bottom;
    } 
    else {
        this.cubes[1][2][row] = left;
        this.cubes[0][1][row] = bottom;
        this.cubes[1][0][row] = right;
        this.cubes[2][1][row] = top;
    }
    
    if(dir === 0) {
        this.cubes[0][2][row] = topRight;
        this.cubes[0][0][row] = topLeft;
        this.cubes[2][0][row] = bottomLeft;
        this.cubes[2][2][row] = bottomRight;
    }
    else {
        this.cubes[0][2][row] = topLeft;
        this.cubes[0][0][row] = topRight;
        this.cubes[2][0][row] = bottomRight;
        this.cubes[2][2][row] = bottomLeft;
    }
}

/**
 * Swaps Cubies in row
 * @param {Cubie[]} row
 * @param {Number} dir
 */
RubiksCube.prototype.swapRow = function(row, dir) {

    var top =       this.cubes[1][row][0];
    var bottom =    this.cubes[1][row][this.cubes[1][row].length - 1];
    var left =      this.cubes[0][row][1];
    var right =     this.cubes[this.cubes.length - 1][row][1];
    
    var topLeft =       this.cubes[0][row][0];
    var bottomLeft =    this.cubes[0][row][this.cubes[1][row].length - 1];
    var bottomRight =   this.cubes[this.cubes.length - 1][row][this.cubes[1][row].length - 1];
    var topRight =      this.cubes[this.cubes[1][row].length - 1][row][0];
    
    if(dir === 0) {
        this.cubes[1][row][0] = right;
        this.cubes[0][row][1] = top;
        this.cubes[1][row][this.cubes[1][row].length - 1] = left;
        this.cubes[this.cubes.length - 1][row][1] = bottom;
    } 
    else {
        this.cubes[1][row][0] = left;
        this.cubes[0][row][1] = bottom;
        this.cubes[1][row][this.cubes[1][row].length - 1] = right;
        this.cubes[this.cubes.length - 1][row][1] = top;
    }
    
    if(dir === 0) {
        this.cubes[0][row][0] = topRight;
        this.cubes[0][row][this.cubes[1][row].length - 1] = topLeft;
        this.cubes[this.cubes.length - 1][row][this.cubes[1][row].length - 1] = bottomLeft;
        this.cubes[this.cubes[1][row].length - 1][row][0] = bottomRight;
    }
    else {
        this.cubes[0][row][0] = bottomLeft;
        this.cubes[0][row][this.cubes[1][row].length - 1] = bottomRight;
        this.cubes[this.cubes.length - 1][row][this.cubes[1][row].length - 1] = topRight;
        this.cubes[this.cubes[1][row].length - 1][row][0] = topLeft;
    }
}


/**
 * Perform rotation about a column
 * @param {Cubie[]} column
 * @param {Number} dir
 */
RubiksCube.prototype.rotateColumn = function(column, dir) {
    for(var y = 0; y < this.cubes[column].length; y++) {
        for(var z = 0; z < this.cubes[column][y].length; z++) {
            if(dir === 0) {
                this.cubes[column][y][z].smoothOrbit(-90, X_AXIS);
            }
            else {
                this.cubes[column][y][z].smoothOrbit(90, X_AXIS);
            }               
        }
    }
    this.swapColumn(column, dir);
}

/**
 * Switch based on a column
 * @param {Cubie[]} column
 * @param {Number} dir
 */
this.RubiksCube.prototype.swapColumn = function(column, dir) {

    var yLength = this.cubes[column].length - 1;
    var zLength = this.cubes[column].length - 1;
    
    var top =       this.cubes[column][this.cubes[column].length - 1][1];
    var bottom =    this.cubes[column][0][1];
    var left =      this.cubes[column][1][this.cubes[column][1].length - 1];
    var right =     this.cubes[column][1][0];
    
    var topLeft =       this.cubes[column][yLength][zLength];
    var bottomLeft =    this.cubes[column][0][zLength];
    var bottomRight =   this.cubes[column][0][0];
    var topRight =      this.cubes[column][yLength][0];
    
    if(dir === 0) {
        this.cubes[column][this.cubes[column].length - 1][1] = left;
        this.cubes[column][0][1] = right;
        this.cubes[column][1][this.cubes[column][1].length - 1] = bottom;
        this.cubes[column][1][0] = top;
    }
    else {
        this.cubes[column][this.cubes[column].length - 1][1] = right;
        this.cubes[column][0][1] = left;
        this.cubes[column][1][this.cubes[column][1].length - 1] = top;
        this.cubes[column][1][0] = bottom;
    }
    
    if(dir === 0) {
        this.cubes[column][yLength][zLength] = bottomLeft;
        this.cubes[column][0][zLength] = bottomRight;
        this.cubes[column][0][0] = topRight;
        this.cubes[column][yLength][0] = topLeft;
    }
    else {
        this.cubes[column][yLength][zLength] = topRight;
        this.cubes[column][0][zLength] = topLeft;
        this.cubes[column][0][0] = bottomLeft;
        this.cubes[column][yLength][0] = bottomRight;
    }
}

/**
 * Build a RubiksCube from a string
 * @param input
 * @returns {RubiksCube}
 * @constructor
 */
function RubiksCubeFromString(input) {
   
    colors = charsToColors(input);
    cubeColors = [];
    cubeColors[0]   = new CubeColors([BO,BA,L], [colors[12], colors[6], colors[11]]); 
    cubeColors[1]   = new CubeColors([BO,L],    [colors[21], colors[20]]); 
    cubeColors[2]   = new CubeColors([BO,F,L],  [colors[30], colors[36], colors[29]]); 
    cubeColors[3]   = new CubeColors([BA,L],    [colors[3], colors[10]]); 
    cubeColors[4]   = new CubeColors([L],       [colors[19]]); 
    cubeColors[5]   = new CubeColors([L, F],    [colors[28], colors[39]]); 
    cubeColors[6]   = new CubeColors([L,BA,T],  [colors[9], colors[0], colors[51]]); 
    cubeColors[7]   = new CubeColors([L, T],    [colors[18], colors[48]]); 
    cubeColors[8]   = new CubeColors([L, T, F], [colors[27], colors[45], colors[42]]); 
    cubeColors[9]   = new CubeColors([BO, BA],  [colors[13], colors[7]]); 
    cubeColors[10]  = new CubeColors([BO],      [colors[22]]); 
    cubeColors[11]  = new CubeColors([BO,F],    [colors[31], colors[37]]); 
    cubeColors[12]  = new CubeColors([BA],      [colors[4]]); 
    cubeColors[13]  = new CubeColors([F],       [colors[40]]); 
    cubeColors[14]  = new CubeColors([BA, T],   [colors[1], colors[52]]); 
    cubeColors[15]  = new CubeColors([T],       [colors[49]]); 
    cubeColors[16]  = new CubeColors([F, T],    [colors[43], colors[46]]); 
    cubeColors[17]  = new CubeColors([BO,BA,R], [colors[14], colors[8], colors[15]]); 
    cubeColors[18]  = new CubeColors([BO,R],    [colors[23], colors[24]]); 
    cubeColors[19]  = new CubeColors([BO,F,R],  [colors[32], colors[38], colors[33]]); 
    cubeColors[20]  = new CubeColors([BA,R],    [colors[5], colors[15]]); 
    cubeColors[21]  = new CubeColors([R],       [colors[25]]); 
    cubeColors[22]  = new CubeColors([R, F],    [colors[34], colors[41]]); 
    cubeColors[23]  = new CubeColors([R,BA,T],  [colors[17], colors[2], colors[53]]); 
    cubeColors[24]  = new CubeColors([R, T],    [colors[26], colors[50]]); 
    cubeColors[25]  = new CubeColors([R, T, F], [colors[35], colors[47], colors[44]]);

    return new RubiksCube(cubeColors);
 }

























 
