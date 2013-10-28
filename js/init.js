var drawables = [];
var gl;

window.onload = function() {
    gl = WebGLUtils.setupWebGL(document.getElementById("cubeCanvas"));
    gl.viewport( 0, 0, 512, 512 );
    gl.clearColor(1, 1, 1, 1.0 );
    var shaders = initShaders(gl, "vertex-shader", "fragment-shader");
    var camera = new Camera();
    camera.setOrtho(-5,5,-5,5,-5,5);
    camera.move(2,.5,2);
    camera.aim(0,1,0);
    camera.direction(2,2,2);
    gl.enable(gl.DEPTH_TEST);
    var light = new Light(new Material(vec4(1,1,1,1), vec4(1,1,0,1), vec4(1,1,0,1), 6));
    light.setPosition(20000,200000,200000,1);
    light.setSpecular(1,1,1,1);
    light.setDiffuse(1,1,.8,1);
    light.setAmbient(.5,.5,.1,.1);
    var cube = new SolidCuboid(1.5, .5,2,colors, shaders, camera, light); 
    drawables.push(cube);
    cube.move(3,1);
    render(); 
}

function init() {
    gl = WebGLUtils.setupWebGL(document.getElementById("cubeCanvas"));
}

var render = function(){
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
    for ( var i in drawables ) {
        drawables[i].draw();
    }       

    requestAnimFrame(render); 
}   
