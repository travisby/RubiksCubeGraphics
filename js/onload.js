var cameraA;
var cameraB;
var rubiksCube;
var light;
window.onload = function() {
    init();
    cameraA = new Camera();
    cameraA.setOrtho(-10,10,-10,10,-10,10);
    cameraA.move(2,2,2);
    cameraA.aim(0,0,0);
    cameraA.direction(2,3,2);
    
    cameraB = new Camera();
    cameraB.setOrtho(-10,10,-10,10,-10,10);
    cameraB.move(-2,-2,-2);
    cameraB.aim(0,0,0);
    cameraB.direction(-2,3,-2);
    
    light = new Light();
    light.setPosition(100,100,100,0);
    light.setSpecular(.5,.5,.5,1);
    light.setDiffuse(1,1,1,1);
    light.setAmbient(1,1,1,.1);

    var sceneA = new Scene("canvasA", light, cameraA);
    var sceneB = new Scene("canvasB", light, cameraB); 
    rubiksCube = RubiksCubeFromString("RRRRRRRRRGGGYYYBBBGGGYYYBBBGGGYYYBBBOOOOOOOOOWWWWWWWWW");
    sceneA.add(rubiksCube);
    sceneB.add(rubiksCube);
    sceneA.render();
    sceneB.render();    
}
