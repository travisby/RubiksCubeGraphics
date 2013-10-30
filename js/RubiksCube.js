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
  var savedCubies = [];
  var cubies = this._getCubies();


  // visually turn
  face.turn();

  // array turn
  switch (face.u) {
    case 0:
        savedCubies = [cubies[0], cubies[1], cubies[2], cubies[3], cubies[4], cubies[5],cubies[6], cubies[7], cubies[8]];
        cubies[0] = savedCubies[2];
        cubies[1] = savedCubies[5];
        cubies[2] = savedCubies[8];
        cubies[3] = savedCubies[1];
        cubies[4] = savedCubies[4];
        cubies[5] = savedCubies[7];
        cubies[6] = savedCubies[0];
        cubies[7] = savedCubies[3];
        cubies[8] = savedCubies[6];
      break;
    case 1:
        savedCubies = [cubies[0], cubies[3], cubies[6], cubies[9], cubies[10], cubies[11], cubies[16], cubies[17], cubies[18]];
      cubies[0] = savedCubies[2];
      cubies[3] = savedCubies[5];
      cubies[6] = savedCubies[8];
      cubies[9] = savedCubies[1];
      cubies[10] = savedCubies[4];
      cubies[11] = savedCubies[7];
      cubies[16] = savedCubies[0];
      cubies[17] = savedCubies[3];
      cubies[18] = savedCubies[6];
      break;
    case 2:
        savedCubies = [cubies[6], cubies[7], cubies[8], cubies[11], cubies[12], cubies[13], cubies[18], cubies[19], cubies[20]];
      cubies[6] = savedCubies[2];
      cubies[7] = savedCubies[5];
      cubies[8] = savedCubies[8];
      cubies[11] = savedCubies[1];
      cubies[12] = savedCubies[4];
      cubies[13] = savedCubies[7];
      cubies[18] = savedCubies[0];
      cubies[19] = savedCubies[3];
      cubies[20] = savedCubies[6];
      break;
    case 3:
      savedCubies = [cubies[8], cubies[5], cubies[2], cubies[13], cubies[14], cubies[15], cubies[20], cubies[21], cubies[2]];
        cubies[8] = savedCubies[2];
        cubies[5] = savedCubies[5];
        cubies[2] = savedCubies[8];
        cubies[13] = savedCubies[1];
        cubies[14] = savedCubies[4];
        cubies[15] = savedCubies[7];
        cubies[20] = savedCubies[0];
        cubies[21] = savedCubies[3];
        cubies[22] = savedCubies[6];
      break;
    case 4:
        savedCubies = [cubies[18], cubies[19], cubies[20], cubies[17], cubies[23], cubies[21], cubies[16], cubies[24], cubies[22]];
      cubies[18] = savedCubies[2];
      cubies[19] = savedCubies[5];
      cubies[20] = savedCubies[8];
      cubies[17] = savedCubies[1];
      cubies[23] = savedCubies[4];
      cubies[21] = savedCubies[7];
      cubies[16] = savedCubies[0];
      cubies[24] = savedCubies[3];
      cubies[22] = savedCubies[6];
      break;
    case 5:
        savedCubies = [cubies[16], cubies[24], cubies[22], cubies[9], cubies[25], cubies[15], cubies[0], cubies[1], cubies[2]];
      cubies[16] = savedCubies[6];
      cubies[24] = savedCubies[3];
      cubies[22] = savedCubies[0];
      cubies[9] = savedCubies[7];
      cubies[25] = savedCubies[4];
      cubies[15] = savedCubies[1];
      cubies[0] = savedCubies[8];
      cubies[1] = savedCubies[5];
      cubies[2] = savedCubies[2];
      break;
  }
}

/**
 * Retrieve a face based on its color
 * @param {Color} color
 * @returns {Face}
 */
RubiksCube.prototype.getFaceByColor = function(color) {
  return this.getFaces()[window.faceIndexByColor[color.u]];
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

  // this is what you get javascript for being terrible
  window.faceIndexByColor = new Object();
  window.faceIndexByColor[charToColor(text[4]).u] = 0;
  window.faceIndexByColor[charToColor(text[19]).u] = 1;
  window.faceIndexByColor[charToColor(text[22]).u] = 2;
  window.faceIndexByColor[charToColor(text[25]).u] = 3;
  window.faceIndexByColor[charToColor(text[40]).u] = 4;
  window.faceIndexByColor[charToColor(text[49]).u] = 5;

  return cube;
}
