var init = function() {
    
    var spinR = document.getElementById("spinR");
    spinR.addEventListener("click",
        function() {
          rubiksCube.turnFace(rubiksCube.getFaceByColor(RED));
        });
    
    var spinB = document.getElementById("spinB");
    spinB.addEventListener("click",
        function() {
          rubiksCube.turnFace(rubiksCube.getFaceByColor(BLUE));
        });
    
    var spinW = document.getElementById("spinW");
    spinW.addEventListener("click",
        function() {
            rubiksCube.turnFace(rubiksCube.getFaceByColor(WHITE));
        });

    var spinO = document.getElementById("spinO");
    spinO.addEventListener("click",
        function() {
          rubiksCube.turnFace(rubiksCube.getFaceByColor(ORANGE));
        });
    
    var spinY = document.getElementById("spinY");
    spinY.addEventListener("click",
        function() {
          rubiksCube.turnFace(rubiksCube.getFaceByColor(YELLOW));
        });
    
    var spinG = document.getElementById("spinG");
    spinG.addEventListener("click",
        function() {
          rubiksCube.turnFace(rubiksCube.getFaceByColor(GREEN));
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
                window.rubiksCube = RubiksCubeFactoryFromString(textFromFile);
              }
          );
          sceneA.add(window.rubiksCube);
          sceneB.add(window.rubiksCube);
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
