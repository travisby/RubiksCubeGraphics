//Git did not like my rename even though I redid it multiple times... Lost history for the file. :(

/**
 * A simple WebGl Cuboid (3D rectangle).
 */

function SolidCuboid(width, height, depth, colors, shader, camera, light) {
    Shape.apply(this, [shader, camera, light]);
    this._width = width;
    this._height = height;  
    this._depth = depth;
    
    this._vertices = [[]];
    
    this.setVertices = function()
    {
        this._vertices = [
            [-(this._width / 2),  (this._height / 2),  (this._depth / 2)],    
            [ (this._width / 2),  (this._height / 2),  (this._depth / 2)],       
            [ (this._width / 2), -(this._height / 2),  (this._depth / 2)],
            [-(this._width / 2), -(this._height / 2),  (this._depth / 2)],       
            [-(this._width / 2),  (this._height / 2), -(this._depth / 2)],
            [ (this._width / 2),  (this._height / 2), -(this._depth / 2)],       
            [ (this._width / 2), -(this._height / 2), -(this._depth / 2)],
            [-(this._width / 2), -(this._height / 2), -(this._depth / 2)]
        ]; 
    }

    this.makeCuboid = function() {
       this.makeSide(0,1,2,3, colors[0]);
       this.makeSide(4,0,3,7, colors[1]);
       this.makeSide(4,5,1,0, colors[2]);
       this.makeSide(1,5,6,2, colors[3]);
       this.makeSide(5,4,7,6, colors[4]);
       this.makeSide(7,6,2,3, colors[5]);           
    }

    this.makeSide = function( topLeft, topRight, bottomRight, bottomLeft, color )
    {
        var t1 = subtract(this._vertices[topRight], this._vertices[topLeft]);
        var t2 = subtract(this._vertices[bottomRight], this._vertices[topRight]);
        var normal = cross(t1, t2);
        var normal = vec3(normal);
        normal = normalize(normal);

        this._points.push(vec4(this._vertices[topLeft]));
        this._colors.push(vec4(color));
        this.normals.push(normal);
        
        this._points.push(vec4(this._vertices[topRight]));
        this._colors.push(vec4(color)); 
        this.normals.push(normal);
        
        this._points.push(vec4(this._vertices[bottomRight]));
        this._colors.push(vec4(color));                
        this.normals.push(normal);

        this._points.push(vec4(this._vertices[topLeft]));           
        this._colors.push(vec4(color));
        this.normals.push(normal);

        this._points.push(vec4(this._vertices[bottomRight]));
        this._colors.push(vec4(color));
        this.normals.push(normal);

        this._points.push(vec4(this._vertices[bottomLeft]));
        this._colors.push(vec4(color));   
        this.normals.push(normal);
     }


    this.setHeight = function(height) {
       this._height = height; 
    }

    this.setWidth = function(width) {
        this._width = width;
    }

    this.setDepth = function(depth) {
        this._depth = depth;
    }
  
    this.setVertices();
    this.makeCuboid();
    this.setupWebGL();
}

SolidCuboid.prototype = new Shape();
