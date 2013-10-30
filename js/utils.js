/**
 * Builds a string from a file... then calls a callback
 * @param file
 * @param callback
 */
function fileToString(file, callback) {
    // https://www.inkling.com/read/javascript-definitive-guide-david-flanagan-6th/chapter-22/reading-text-files-with
    var reader = new FileReader();  // Create a FileReader object

    reader.onloadend = callback;

    reader.readAsText(file);
}

function directionToAxis(direction) {
    switch (direction) {
        case CUBE_TOP:
            return Y_AXIS;
        case CUBE_BOTTOM:
            return Y_AXIS;
        case CUBE_LEFT:
            return X_AXIS;
        case CUBE_RIGHT:
            return X_AXIS;
        case CUBE_FRONT:
            return Z_AXIS;
        case CUBE_BACK:
            return Z_AXIS;
    }
}