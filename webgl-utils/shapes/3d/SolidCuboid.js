//Git did not like my rename even though I redid it multiple times... Lost history for the file. :(

/**
 * A simple WebGl Cuboid (3D rectangle).
 */

function SolidCuboid(width, height, depth, colors, shader, camera) {
    setCamera(camera);
    setShader(shader);
    
    var _width = width;
    var _height = height;  
    var _depth = depth;
    
    var _vertices = [[]];
    var _points = [];
        
    setVertices();
    makeCuboid();
     
    var setVertices = function()
    {
        var test = 1;
        _vertices = [
            [-(_width / 2),  (_height / 2),  (_depth / 2)],    
            [ (_width / 2),  (_height / 2),  (_depth / 2)],       
            [ (_width / 2), -(_height / 2),  (_depth / 2)],
            [-(_width / 2), -(_height / 2),  (_depth / 2)],       
            [-(_width / 2),  (_height / 2), -(_depth / 2)],
            [ (_width / 2),  (_height / 2), -(_depth / 2)],       
            [ (_width / 2), -(_height / 2), -(_depth / 2)],
            [-(_width / 2), -(_height / 2), -(_depth / 2)]
        ]; 
    }

    var makeCuboid = function()
    {
        makeSide(0,1,2,3, colors[0]);
        makeSide(4,0,3,7, colors[1]);
        makeSide(4,5,1,0, colors[2]);
        makeSide(1,5,6,2, colors[3]);
        makeSide(5,4,7,6, colors[4]);
        makeSide(7,6,2,3, colors[5]);           
    }

    var makeSide = function( topLeft, topRight, bottomRight, bottomleft, color )
    {
        _points.push(vec4(_vertices[topLeft]));
        _colors.push(color);
        
        _points.push(vec4(_vertices[topRight]));
        _colors.push(color); 

        _points.push(vec4(_vertices[bottomRight]));
        _colors.push(color);
        
        _points.push(vec4(_vertices[topLeft]));           
         _colors.push(color);
        
        _points.push(vec4(_vertices[bottomRight]));
        _colors.push(color);

        _points.push(vec4(_vertices[bottomLeft]));
        _colors.push(color);   
    }


    this.setHeight = function(height) {
       _height = height; 
    }

    this.setWidth = function(width) {
        _width = width;
    }

    this.setDepth = function(depth) {
        _depth = depth;
    }
}

SolidCuboid.prototype = new Shape();
