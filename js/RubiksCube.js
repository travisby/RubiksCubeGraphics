/**
 * Generates a RubiksCube
 * @constructor
 */
function RubiksCube() {
  /**
   *
   * @type {Cubie[]}
   */
  var cubies = [];

  // Create our cubies
  for (var i = 0; i < 26; i++) {
    cubies[i] = new Cubie();
  }



    console.log(cubies);

  // used by Model for drawing
  this.setDrawables(cubies);

  this._getCubies = function() {
    return cubies;
  }
}
RubiksCube.prototype = Object.create(Model.prototype);
RubiksCube.prototype.constructor = RubiksCube;

/**
 * Facial representation of our cube in order... B, L, D, R, F, U
 * @returns {Face[]}
 */
RubiksCube.prototype.getFaces = function() {
  var cubies = this._getCubies();

  return [
      new BackFace([cubies[0], cubies[1], cubies[2], cubies[3], cubies[4], cubies[5],cubies[6], cubies[7], cubies[8]]),
      new LeftFace([cubies[0], cubies[3], cubies[6], cubies[9], cubies[10], cubies[11], cubies[16], cubies[17], cubies[18]]),
      new DownFace([cubies[6], cubies[7], cubies[8], cubies[11], cubies[12], cubies[13], cubies[18], cubies[19], cubies[20]]),
      new RightFace([cubies[8], cubies[5], cubies[2], cubies[13], cubies[14], cubies[15], cubies[20], cubies[21], cubies[2]]),
      new FrontFace([cubies[18], cubies[19], cubies[20], cubies[17], cubies[23], cubies[21], cubies[16], cubies[24], cubies[22]]),
      new UpFace([cubies[16], cubies[24], cubies[22], cubies[9], cubies[25], cubies[15], cubies[0], cubies[1], cubies[2]])
  ];
}


/**
 * Rotate face 90 degrees counter-clockwise
 * @param {Face} face
 */
RubiksCube.prototype.turnFace = function(face) {
  face.turn();
}

/**
 * Retrieve a face based on its color
 * @param {Color} color
 * @returns {Face}
 */
RubiksCube.prototype.getFaceByColor = function(color) {
  var faces = this.getFaces();

  for (var i = 0; i < faces.length; i++) {
    if (faces[i].getColor() == color) {
      return faces[i];
    }
  }
  // SOMETHING BROKE
  return null;
}


/**
 * Turns the rubiks cube based on a string... "O3W1" meaning "Turn orange three times, White one time"
 * @param {string} str
 */
RubiksCube.prototype.turnByString = function(str) {
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
        faceColorsInOrder[index] = charToColor(str[i]);
        numTurnsInOrder[index] = parseInt(str[i + 1]);
        index++;
    }

    // for every face...
    for (var i = 0; i < faceColorsInOrder.length; i++) {
        var face = this.getFaceByColor(faceColorsInOrder[i]);
        // perform the amount of turns given
        while (numTurnsInOrder[i] > 0) {
            face.turn();
            numTurnsInOrder[i]--;
        }
    }
}

/**
 * Builds a RubiksCube by using a file handle to get the colors
 * @param {string} text
 * @returns {RubiksCube}
 * @constructor
 */
function RubiksCubeFactoryFromString(text) {

    var cube = new RubiksCube();
    var faces = cube.getFaces();
    console.log(faces);
  // remove ALL whitespace
  // http://stackoverflow.com/questions/6163169/replace-multiple-whitespaces-with-single-whitespace-in-javascript-string
  text.replace(/\s+/g, '');
  faces[0].setColorsByString([text[0], text[1], text[2], text[3], text[4], text[5], text[6], text[7], text[8]]);
  faces[1].setColorsByString([text[9], text[10], text[11], text[18], text[19], text[20], text[27], text[28], text[29]]);
  faces[2].setColorsByString([text[12], text[13], text[14], text[21], text[22], text[23], text[30], text[31], text[32]]);
  faces[3].setColorsByString([text[15], text[16], text[17], text[24], text[25], text[26], text[33], text[34], text[35]]);
  faces[4].setColorsByString([text[36], text[37], text[38], text[39], text[40], text[41], text[42], text[43], text[44]]);
  faces[5].setColorsByString([text[45], text[46], text[47], text[48], text[49], text[50], text[51], text[52], text[53]]);

  return cube;
}
