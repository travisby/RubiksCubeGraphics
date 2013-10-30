var init = function() {
    
    var spinR = document.getElementById("spinR");
    spinR.addEventListener("click",
        function() {
            rubiksCube.turnFace('r');
        });
    
    var spinB = document.getElementById("spinB");
    spinB.addEventListener("click",
        function() {
            rubiksCube.turnFace('b');
        });
    
    var spinW = document.getElementById("spinW");
    spinW.addEventListener("click",
        function() {
            rubiksCube.turnFace('w');
        });

    var spinO = document.getElementById("spinO");
    spinO.addEventListener("click",
        function() {
            rubiksCube.turnFace('o');
        });
    
    var spinY = document.getElementById("spinY");
    spinY.addEventListener("click",
        function() {
            rubiksCube.turnFace('y');
        });
    
    var spinG = document.getElementById("spinG");
    spinG.addEventListener("click",
        function() {
            rubiksCube.turnFace('g');
        });
    
    var zoomIn = document.getElementById("zoomIn");
    zoomIn.addEventListener("click",
        function() {
            cameraA.zoomIn();
            cameraB.zoomIn(); 
        });       
    
    var zoomOut = document.getElementById("zoomOut");
    zoomOut.addEventListener("click",
        function() {
            cameraA.zoomOut();
            cameraB.zoomOut(); 
        });       
    
    var state = document.getElementById("state");
    state.addEventListener(
        'change',
        (function (event) {
          var file = event.target.files[0];
          fileToString(
              file,
              function(e) {
                var textFromFile = e.target.result;
                // GLOBAL
                console.log(textFromFile);
                rubiksCube = RubiksCubeFromString(textFromFile);
                sceneA.remove();
                sceneB.remove();
                sceneA.add(rubiksCube);
                sceneB.add(rubiksCube);
                sceneA.render();
                sceneB.render();
              }
          )
        }),
        false
    );
    
    var solve = document.getElementById("solve");
    solve.addEventListener(
        'change',
        (function (event) {
          var file = event.target.files[0];
          fileToString(
              file,
              function(e) {
                var textFromFile = e.target.result;
                rubiksCube.turnByString(textFromFile);
              }
          )
        }),
        false
    );
}
