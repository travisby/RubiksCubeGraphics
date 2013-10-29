window.onload = function() {
    var camera = new Camera();
    camera.setOrtho(-5,5,-5,5,-5,5);
    camera.move(2,2,2);
    camera.aim(0,0,0);
    camera.direction(2,3,2);
    
    var light = new Light();
    light.setPosition(10,10,10,1);
    light.setSpecular(1,1,1,1);
    light.setDiffuse(.2,.2,.2,.2);
    light.setAmbient(.2,.2,.2,.2);

    var scene = new Scene("cubeCanvas", light, camera);
    
    var rubiksCube = RubiksCubeFactoryFromString("GGWRRGRRGOWWGGOYYROGOYYYRBRYYYRBGRWWBOYBOBBOBOGOWWBWWB"); 

    scene.add(rubiksCube);

    scene.render();
}
