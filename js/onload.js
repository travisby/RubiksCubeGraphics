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
    rubiksCube = RubiksCubeFactoryFromString("GGWRRGRRGOWWGGOYYROGOYYYRBRYYYRBGRWWBOYBOBBOBOGOWWBWWB");
    var cubies = rubiksCube._getCubies();
    cubies[0].move(-1, X_AXIS); cubies[0].move(1, Y_AXIS); cubies[0].move(-1, Z_AXIS);
    cubies[1].move(0, X_AXIS); cubies[1].move(1, Y_AXIS); cubies[1].move(-1, Z_AXIS);
    cubies[2].move(1, X_AXIS); cubies[2].move(1, Y_AXIS); cubies[2].move(-1, Z_AXIS);
    cubies[3].move(-1, X_AXIS); cubies[3].move(0, Y_AXIS); cubies[3].move(-1, Z_AXIS);
    cubies[4].move(0, X_AXIS); cubies[4].move(0, Y_AXIS); cubies[4].move(-1, Z_AXIS);
    cubies[5].move(1, X_AXIS); cubies[5].move(0, Y_AXIS); cubies[5].move(-1, Z_AXIS);
    cubies[6].move(-1, X_AXIS); cubies[6].move(-1, Y_AXIS); cubies[6].move(-1, Z_AXIS);
    cubies[7].move(0, X_AXIS); cubies[7].move(-1, Y_AXIS); cubies[7].move(-1, Z_AXIS);
    cubies[8].move(1, X_AXIS); cubies[8].move(-1, Y_AXIS); cubies[8].move(-1, Z_AXIS);
    cubies[9].move(-1, X_AXIS); cubies[9].move(1, Y_AXIS); cubies[9].move(0, Z_AXIS);
    cubies[10].move(-1, X_AXIS); cubies[10].move(0, Y_AXIS); cubies[10].move(0, Z_AXIS);
    cubies[11].move(-1, X_AXIS); cubies[11].move(-1, Y_AXIS); cubies[11].move(0, Z_AXIS);
    cubies[12].move(0, X_AXIS); cubies[12].move(-1, Y_AXIS); cubies[12].move(0, Z_AXIS);
    cubies[13].move(1, X_AXIS); cubies[13].move(-1, Y_AXIS); cubies[13].move(0, Z_AXIS);
    cubies[14].move(1, X_AXIS); cubies[14].move(0, Y_AXIS); cubies[14].move(0, Z_AXIS);
    cubies[15].move(1, X_AXIS); cubies[15].move(1, Y_AXIS); cubies[15].move(0, Z_AXIS);
    cubies[16].move(-1, X_AXIS); cubies[16].move(1, Y_AXIS); cubies[16].move(1, Z_AXIS);
    cubies[17].move(-1, X_AXIS); cubies[17].move(0, Y_AXIS); cubies[17].move(1, Z_AXIS);
    cubies[18].move(-1, X_AXIS); cubies[18].move(-1, Y_AXIS); cubies[18].move(1, Z_AXIS);
    cubies[19].move(0, X_AXIS); cubies[19].move(-1, Y_AXIS); cubies[19].move(1, Z_AXIS);
    cubies[20].move(1, X_AXIS); cubies[20].move(-1, Y_AXIS); cubies[20].move(1, Z_AXIS);
    cubies[21].move(1, X_AXIS); cubies[21].move(0, Y_AXIS); cubies[21].move(1, Z_AXIS);
    cubies[22].move(1, X_AXIS); cubies[22].move(1, Y_AXIS); cubies[22].move(1, Z_AXIS);
    cubies[23].move(0, X_AXIS); cubies[23].move(0, Y_AXIS); cubies[23].move(1, Z_AXIS);
    cubies[24].move(0, X_AXIS); cubies[24].move(1, Y_AXIS); cubies[24].move(1, Z_AXIS);
    cubies[25].move(0, X_AXIS); cubies[25].move(1, Y_AXIS); cubies[25].move(0, Z_AXIS);
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
