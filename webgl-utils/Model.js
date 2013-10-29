var Model = function() {
    this.drawables = [];
}

Model.prototype.setDrawables(drawables) {
    this.drawables = drawables;
}

Model.prototype.add = function(drawable) {
    this.drawables.push(drawable);
}

Model.prototype.draw = function(gl, shader, light, camera) {
    for(var i in this.drawables) {
        this.drawables[i].draw(gl, shader, light, camera);
    }
}

Model.prototype.move = function(distance, axis) {
    for(var i in this.drawables) {
        drawables[i].move(distance, axis);
    }
}

Model.prototype.rotate = function(angle, axis) {
    for(var i in this.drawables) {
        drawables[i].rotate(angle, axis);
    }
}

Model.prototype.orbit = function(angle, axis) {
    for(var i in this.drawables) {
        drawables[i].orbit(angle, axis);
    }
}
