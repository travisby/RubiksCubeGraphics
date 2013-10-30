var init = function() {
    
    var spinR = document.getElementById("spinR");
    spinR.addEventListener("click",
        function() {
           rubiksCube.smoothOrbit(90, 1);
        });
    
    var spinB = document.getElementById("spinB");
    spinB.addEventListener("click",
        function() {
            console.log("test");
            rubiksCube.smoothOrbit(-90, 1);
        });
    
    var spinW = document.getElementById("spinW");
    spinW.addEventListener("click",
        function() {
            //TODO
        });

    var spinO = document.getElementById("spinO");
    spinO.addEventListener("click",
        function() {
            //TODO
        });
    
    var spinY = document.getElementById("spinY");
    spinY.addEventListener("click",
        function() {
            //TODO
        });
    
    var spinG = document.getElementById("spinG");
    spinG.addEventListener("click",
        function() {
            //TODO
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
