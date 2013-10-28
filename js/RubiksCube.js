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
  for (var i = 0; i <= 27; i++) {
    cubies[i] = new Cubie();
  }

  this._getCubies = function() {
    return cubies;
  }

}

/**
 * Facial representation of our cube in order... B, L, D, R, F, U
 * @returns {Face[]}
 */
RubiksCube.prototype.getFaces = function() {
  var cubies = this._getCubies();

  return [
      new BackFace([cubies[0], cubies[1], cubies[2], cubies[3], cubies[4], cubies[5],cubies[6], cubies[7], cubies[8]]),
      new LeftFace([cubies[3], cubies[5], cubies[8], cubies[9], cubies[11], cubies[13], cubies[10], cubies[12], cubies[14]]),
      new DownFace([cubies[8], cubies[7], cubies[6], cubies[13], cubies[16], cubies[15], cubies[14], cubies[18], cubies[17]]),
      new RightFace([cubies[0], cubies[3], cubies[6], cubies[20], cubies[22], cubies[15], cubies[19], cubies[21], cubies[17]]),
      new FrontFace([cubies[14], cubies[28], cubies[17], cubies[12], cubies[24], cubies[21], cubies[10], cubies[23], cubies[19]]),
      new UpFace([cubies[2], cubies[1], cubies[0], cubies[9], cubies[25], cubies[20], cubies[11], cubies[23], cubies[19]])
  ];
}

RubiksCube.prototype.draw = function() {
  var faces = this.getFaces();

  for (var i = 0; i < faces.length; i++) {
    faces[i].draw();
  }
}
/**
 * Builds a RubiksCube by using a file handle to get the colors
 * @param file handle to build from
 * @returns {RubiksCube}
 * @constructor
 */
function RubiksCubeFactoryFromFile(file) {
  // https://www.inkling.com/read/javascript-definitive-guide-david-flanagan-6th/chapter-22/reading-text-files-with

  var reader = new FileReader();  // Create a FileReader object
  var text = '';
  var cube = new RubiksCube();
  var faces = this.getFaces();
  reader.readAsText(file);           // Read the file
  reader.onload = function() {    // Define an event handler
    text = reader.result;   // This is the file contents
  }

  while (!text) {
    // loop while we wait for file reading to end
  }
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
