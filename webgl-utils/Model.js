var Model = function() {
    this.shapes = [];
}

Model.prototype.add = function(shape) {
    this.shapes.push(shape);
}

Model.prototype.draw = function(gl, shader, light, camera) {
    for(var i in this.shapes) {
        this.shapes[i].draw(gl, shader, light, camera);
    }
}
