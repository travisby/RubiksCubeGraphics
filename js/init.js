var drawables = [];

window.onload = function() {
    init();
    console.log(gl);
    var gl = WebGLUtils.setupWebGL(document.getElementById("cubeCanvas"));
    var shaders = initShaders(gl, "vertex-shader", "fragment-shader");
    var BLACK = [0.0, 0.0, 0.0, 1.0];
    var WHITE = [1.0, 1.0, 1.0, 1.0];
    var BLUE = [0.0, 0.0, 1.0, 1.0];
    var RED = [1.0, 0.0, 0.0, 1.0];
    var GREEN = [0.0, 1.0, 0.0, 1.0];
    var ORANGE = [1.0, 0.498, 0.0, 1.0];
    var YELLOW = [1.0, 1.0, 0.0, 1.0];
    var colors = [BLACK, WHITE, BLUE, RED, GREEN, ORANGE, YELLOW];
    var camera = new Camera();
    camera.setOrtho(-5,5,-5,5,-5,5);
    camera.move(1,1,1);
    camera.aim(0,0,0);
    camera.direction(2,2,2);
    console.log("the fuck");
    var cube = new SolidCuboid(1,1,1,colors, shaders, new Camera(), gl); 
    drawables.push(cube);
    cube.draw();
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
