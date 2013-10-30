var cameraA;
var cameraB;
var rubiksCube;

window.onload = function() {
    init();
    cameraA = new Camera();
    cameraA.setOrtho(-5,5,-5,5,-5,5);
    cameraA.move(2,2,2);
    cameraA.aim(0,0,0);
    cameraA.direction(2,3,2);
    
    cameraB = new Camera();
    cameraB.setOrtho(-5,5,-5,5,-5,5);
    cameraB.move(-2,-2,-2);
    cameraB.aim(0,0,0);
    cameraB.direction(-2,3,-2);
    
    var light = new Light();
    light.setPosition(10,10,10,1);
    light.setSpecular(1,1,1,1);
    light.setDiffuse(1,1,1,1);
    light.setAmbient(0,.1,.1,1);

    var sceneA = new Scene("canvasA", light, cameraA);
    var sceneB = new Scene("canvasB", light, cameraB); 
    var rubiksCube = RubiksCubeFactoryFromString("GGWRRGRRGOWWGGOYYROGOYYYRBRYYYRBGRWWBOYBOBBOBOGOWWBWWB"); 
    
    var colors = new CubeColors();
    colors.set(CUBE_TOP, [1, 1, 1, 1]);
    colors.set(CUBE_BOTTOM, [1, 1, 0, 1]);
    colors.set(CUBE_LEFT, [1, 0, 1, 1]);
    colors.set(CUBE_RIGHT, [0, 1, 1, 1]);
    colors.set(CUBE_FRONT, [0, 0, 1, 1]);
    colors.set(CUBE_BACK, [0, 1, 0, 1]);
    
    sceneA.add(rubiksCube);
    sceneB.add(rubiksCube);
 
    sceneA.render();
    sceneB.render();    
}
