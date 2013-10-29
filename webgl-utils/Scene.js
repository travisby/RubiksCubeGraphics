var Scene = function(canvasID, light, camera) {
    
    this.canvasID = canvasID;
    this.light = light;
    this.camera = camera;
    
    this.canvas = document.getElementById(this.canvasID);
    this.gl = WebGLUtils.setupWebGL(this.canvas);
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    
    this.shader = initShaders(this.gl, "vertex-shader", "fragment-shader");
    
    this.drawables = [];
}

Scene.prototype.add = function(drawable) {
    drawable.setupWebGL(this.gl);
    this.drawables.push(drawable);
}

Scene.prototype.render = function() {
    this.gl.clear( this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT );
    for(var i in this.drawables) {
        this.drawables[i].draw(this.gl, this.shader, this.light, this.camera);
    }  
    var inst = this;
    window.setTimeout(function() {
        inst.render();
    }, 1000/60);
}
