/**
 * A simple WebGl Cuboid (3D rectangle).
 */

function GlCuboid(width, height, depth, colors, shader, camera) {
    this.setCamera(camera);
    this.setShader(shader);
    
    var _width = width;
    var _height = height;  
    var _depth = depth;
    
    var _vertices;
    var _points = [];
        
    setVertices();
    makeCuboid();
     
    var setVertices = function()
    {
        _vertices = [
            [-(_width / 2),  (_height / 2),  (_depth / 2)],
            [ (_width / 2),  (_height / 2),  (_depth / 2)],       
            [ (_width / 2), -(_height / 2),  (_depth / 2)],
            [-(_width / 2), -(_height / 2),  (_depth / 2)],       
            [-(_width / 2),  (_height / 2), -(_depth / 2)],
            [ (_width / 2),  (_height / 2), -(_depth / 2)],       
            [ (_width / 2), -(_height / 2), -(_depth / 2)],
            [-(_width / 2), -(_height / 2), -(_depth / 2)],       
    }

    var makeCuboid = function()
    {
        makeSide(1,2,3,4, colors[0]);
        makeSide(1,2,3,4, colors[0]);
        makeSide(1,2,3,4, colors[0]);
        makeSide(1,2,3,4, colors[0]);
        makeSide(1,2,3,4, colors[0]);
        makeSide(1,2,3,4, colors[0]);           
    }

    var makeSide = function( topLeft, topRight, bottomRight, bottomleft, color )
    {
        _points.push(vec4(_vertices[topLeft]);
        _points.push(vec4(_vertices[topRight]);
        _points.push(vec4(_vertices[bottomRight]);
        _points.push(vec4(_vertices[topLeft]);
        _points.push(vec4(_vertices[bottomRight]);
        _points.push(vec4(_vertices[bottomLeft]);
    }


    this.setHeight(height) {
       _height = height; 
    }

    this.setWidth(width) {
        _width = width;
    }

    this.setDepth(depth) {
        _depth = depth;
    }
}

GlCuboid.prototype = new Shape();
