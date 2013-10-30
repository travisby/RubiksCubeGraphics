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