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
    camera.move(0,.5,1);
    camera.aim(0,0,0);
    camera.direction(0,5,1);
    
    var light = new Light();
    light.setPosition(10,10,10,0.0);
    light.setSpecular(1,1,1,1);
    light.setDiffuse(.3,.3,.3,.1);
    light.setAmbient(1,1,1,1);
    
    var c = new CubeColors();
    c.set(CUBE_FRONT, RED);    
    c.set(CUBE_RIGHT, BLUE);
    c.set(CUBE_TOP, YELLOW); 
    //c.reset(); - that will reset all the faces to black
    
    var scene = new Scene("cubeCanvas", light, camera);

    for(var i = 0; i < 3; i++) {
        
        var cube = new FancySolidCube(new Material(new vec4(.1,.1,.1,.1), vec4(1,1,1,1), vec4(1,1,1,1), 10), c); 
        cube.move(i * 1.1, X_AXIS);
        scene.add(cube);
    }

    
    scene.render(); 
}
