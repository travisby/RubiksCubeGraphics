/**
 * Builds a string from a file... blocking
 * @param {File} file
 * @returns {string}
 */
function fileToString(file) {
    // https://www.inkling.com/read/javascript-definitive-guide-david-flanagan-6th/chapter-22/reading-text-files-with
    var reader = new FileReader();  // Create a FileReader object
    var text = '';

    reader.readAsText(file);           // Read the file
    reader.onload = function() {    // Define an event handler
        text = reader.result;   // This is the file contents
    }

    while (!text) {
        // loop while we wait for file reading to end
    }

    return text;
}