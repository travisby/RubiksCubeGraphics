/**
 * Builds a new Cubie based on the faces and colors
 * @param {Array} of faces
 * @param {Array} of colors that is sorted by the same index of faces
 * @constructor
 */
function RubiksCubeFaceCubie(facesIBelongTo, colorsOfThoseFaces) {
    // Cubies are represented by a KV store where the face is the key, and the color is the value
    var representation = {};

    for (var i = 0; i < facesIBelongTo.length; i++) {
        representation[facesIBelongTo[i]] = colorsOfThoseFaces[i];
    }

    /**
     * Returns the color of a cubie face
     * @param face
     * @returns {*|COLOR}
     */
    this.getColor = function(face) {
        return representation[face];
    }
}