var cameraA;
var cameraB;
var rubiksCube;
var light;
window.onload = function() {
    init();
    cameraA = new Camera();
    cameraA.setOrtho(-8,8,-8,8,-8,8);
    cameraA.move(0,0,2);
    cameraA.aim(0,0,0);
    cameraA.direction(0,3,2);
    
    cameraB = new Camera();
    cameraB.setOrtho(-8,8,-8,8,-8,8);
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
   // rubiksCube = RubiksCubeFactoryFromString("GGWRRGRRGOWWGGOYYROGOYYYRBRYYYRBGRWWBOYBOBBOBOGOWWBWWB");
    rubiksCube = new RubiksCube();
    /*
    var colors = new CubeColors();
    colors.set(CUBE_TOP, WHITE);
    colors.set(CUBE_BOTTOM, YELLOW);
    colors.set(CUBE_LEFT, ORANGE);
    colors.set(CUBE_RIGHT, RED);
    colors.set(CUBE_FRONT, BLUE);
    colors.set(CUBE_BACK, GREEN);
    rubiksCube = new SolidCube(new Material(vec4(0,0,0,1), vec4(0,0,0,1), vec4(0,0,0,1), 10000), colors);
    */
    sceneA.add(rubiksCube);
    sceneB.add(rubiksCube);
    sceneA.render();
    sceneB.render();    
}
