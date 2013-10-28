//Git did not like my rename even though I redid it multiple times... Lost history for the file. :(

/**
 * A simple WebGl Cuboid (3D rectangle).
 */

function SolidCuboid(shader, camera, light, width, height, depth) {
    //Calls Shape's constructor as far as I can tell.
    //It works so leave it
    Shape.apply(this, [shader, camera, light]);

    var width  = width;
    var height = height;  
    var depth  = depth;
    
    this.vertices = [[]];
    
    var setVertices = function()
    {
        vertices = [
            [-(width / 2),  (height / 2),  (depth / 2)],    
            [ (width / 2),  (height / 2),  (depth / 2)],       
            [ (width / 2), -(height / 2),  (depth / 2)],
            [-(width / 2), -(height / 2),  (depth / 2)],       
            [-(width / 2),  (height / 2), -(depth / 2)],
            [ (width / 2),  (height / 2), -(depth / 2)],       
            [ (width / 2), -(height / 2), -(depth / 2)],
            [-(width / 2), -(height / 2), -(depth / 2)]
        ]; 
    }

    var makeCuboid = function() {
       makeSide(0,1,2,3, colors[0]);
       makeSide(4,0,3,7, colors[1]);
       makeSide(4,5,1,0, colors[2]);
       makeSide(1,5,6,2, colors[3]);
       makeSide(5,4,7,6, colors[4]);
       makeSide(7,6,2,3, colors[5]);           
    }

    var makeSide = function( topLeft, topRight, bottomRight, bottomLeft, color )
    {
        var t1 = subtract(this.vertices[topRight], this.vertices[topLeft]);
        var t2 = subtract(this.vertices[bottomRight], this.vertices[topRight]);
        var normal = cross(t1, t2);
        var normal = vec3(normal);
        normal = normalize(normal);

        this.points.push(vec4(this.vertices[topLeft]));
        this.colors.push(vec4(color));
        this.normalVectors.push(normal);
        
        this.points.push(vec4(this.vertices[topRight]));
        this.colors.push(vec4(color)); 
        this.normalVectors.push(normal);
        
        this.points.push(vec4(this.vertices[bottomRight]));
        this.colors.push(vec4(color));                
        this.normalVectors.push(normal);

        this.points.push(vec4(this.vertices[topLeft]));           
        this.colors.push(vec4(color));
        this.normalVectors.push(normal);

        this.points.push(vec4(this.vertices[bottomRight]));
        this.colors.push(vec4(color));
        this.normalVectors.push(normal);

        this.points.push(vec4(this.vertices[bottomLeft]));
        this.colors.push(vec4(color));   
        this.normalVectors.push(normal);
    }
     
    setVertices();
    makeCuboid();
    setupWebGL();
}

SolidCuboid.prototype = new Shape();
