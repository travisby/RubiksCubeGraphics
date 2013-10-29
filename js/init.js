window.onload = function() {
    var BLACK = [0.0, 0.0, 0.0, 1.0];
    var WHITE = [1.0, 1.0, 1.0, 1.0];
    var BLUE = [0.0, 0.0, 1.0, 1.0];
    var RED = [1.0, 0.0, 0.0, 1.0];
    var GREEN = [0.0, 1.0, 0.0, 1.0];
    var ORANGE = [1.0, 0.498, 0, 1.0];
    var YELLOW = [1.0, 1.0, 0.0, 1.0];
    var colors = [WHITE, BLUE, RED, GREEN, ORANGE, YELLOW];

    var camera = new Camera();
    camera.setOrtho(-5,5,-5,5,-5,5);
    camera.move(1,.5,1);
    camera.aim(0,0,0);
    camera.direction(1,2,1);
    
    var light = new Light();
    light.setPosition(10,10,10,1);
    light.setSpecular(1,1,1,1);
    light.setDiffuse(.2,.2,.2,1);
    light.setAmbient(.2,.2,.2,.1);
    
    var c = new CubeColors();
    c.set(CUBE_FRONT, RED);    
    c.set(CUBE_RIGHT, BLUE);
    c.set(CUBE_TOP, YELLOW);  
  //c.reset(); - that will reset all the faces to black
    var cube = new SolidCube(new Material(new vec4(1,1,1,.1), vec4(1,1,1,.1), vec4(1,1,1,.1), 1000), c); 
    //var cube1 = new SolidCube(new Material(new vec4(1,1,1,.1), vec4(1,1,1,.1), vec4(1,1,1,.1), 1000), colors);
    
    var scene = new Scene("cubeCanvas", light, camera);
    scene.add(cube);
   // scene.add(cube1);   
    
    //cube1.move(4,0); 
    cube.move(-1,1);
    
    scene.render(); 
}
