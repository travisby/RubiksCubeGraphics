var drawables = [];
var gl;

window.onload = function() {
    var BLACK = [0.0, 0.0, 0.0, 1.0];
    var WHITE = [1.0, 1.0, 1.0, 1.0];
    var BLUE = [0.0, 0.0, 1.0, 1.0];
    var RED = [1.0, 0.0, 0.0, 1.0];
    var GREEN = [0.0, 1.0, 0.0, 1.0];
    var ORANGE = [1.0, 0.498, 0.0, 1.0];
    var YELLOW = [1.0, 1.0, 0.0, 1.0];
    var colors = [BLACK, BLUE, RED, GREEN, ORANGE, YELLOW];

    var camera = new Camera();
    camera.setOrtho(-5,5,-5,5,-5,5);
    camera.move(2,2,2);
    camera.aim(0,1,0);
    camera.direction(2,2,2);
    
    var light = new Light();
    light.setPosition(2,2,2,1);
    light.setSpecular(1,.5,1,.1);
    light.setDiffuse(.1,1,.8,.5);
    light.setAmbient(.1,.1,.1,.5);
    
    var cube = new SolidCube(new Material(new vec4(1,1,1,.1), vec4(1,1,1,.1), vec4(1,1,1,.1), .1), colors); 
    var cube1 = new SolidCube(new Material(new vec4(1,1,1,.1), vec4(1,1,1,.1), vec4(1,1,1,.1), .1), colors);
    
    var scene = new Scene("cubeCanvas", light, camera);
    scene.add(cube);
    scene.add(cube1);   
    
    cube1.move(4,1); 
    cube.move(3,1);
    
    scene.render(); 
}

var render = function(){
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
    for ( var i in drawables ) {
        drawables[i].draw();
    }       

    requestAnimFrame(render); 
}   
