//Git did not like my rename even though I redid it multiple times... Lost history for the file. :(

/**
 * A simple WebGl Cuboid (3D rectangle).
 */

function SolidCuboid(material, colors, width, height, depth) {
    //Calls Shape's constructor as far as I can tell.
    //It works so leave it
    Shape.apply(this, [material, colors]);
    var width  = width;
    var height = height;  
    var depth  = depth;
    
    this.vertices = [[]];
    
    this.setVertices = function()
    {
       this.vertices = [
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

    this.makeCuboid = function() {
       this.makeSide(0,1,2,3, this.colors[0]);
       this.makeSide(4,0,3,7, this.colors[1]);
       this.makeSide(4,5,1,0, this.colors[2]);
       this.makeSide(1,5,6,2, this.colors[3]);
       this.makeSide(5,4,7,6, this.colors[4]);
       this.makeSide(7,6,2,3, this.colors[5]);           
    }

    this.makeSide = function( topLeft, topRight, bottomRight, bottomLeft, color )
    {
        var t1 = subtract(this.vertices[topRight], this.vertices[topLeft]);
        var t2 = subtract(this.vertices[bottomRight], this.vertices[bottomLeft]);
        var normal = cross(t1, t2);
        normal = normalize(normal);
        normal[3] = 0;        
        console.log(color);
        this.points.push(vec4(this.vertices[topLeft]));
        this.amV.push(light.ambientProduct(color));
        this.spV.push(light.specularProduct([1,1,1,.1]));
        this.dfV.push(light.diffuseProduct([1,1,1,.1]));   
        this.normalVectors.push(normal);
        
        this.points.push(vec4(this.vertices[topRight]));
        this.amV.push(light.ambientProduct(color));
        this.spV.push(light.specularProduct([1,1,1,.1]));
        this.dfV.push(light.diffuseProduct([1,1,1,.1]));   
        this.normalVectors.push(normal);
        
        this.points.push(vec4(this.vertices[bottomRight]));
        this.amV.push(light.ambientProduct(color));
        this.spV.push(light.specularProduct([1,1,1,.1]));
        this.dfV.push(light.diffuseProduct([1,1,1,.1]));   
        this.normalVectors.push(normal);

        t1 = subtract(this.vertices[bottomRight], this.vertices[topLeft]);
        t2 = subtract(this.vertices[bottomLeft], this.vertices[topLeft]);
        normal = cross(t1, t2);
        normal = normalize(normal);

        this.points.push(vec4(this.vertices[topLeft]));           
        this.amV.push(light.ambientProduct(color));
        this.spV.push(light.specularProduct([1,1,1,1]));
        this.dfV.push(light.diffuseProduct([1,1,1,1]));   
        this.normalVectors.push(normal);

        this.points.push(vec4(this.vertices[bottomRight]));
        this.amV.push(light.ambientProduct(color));
        this.spV.push(light.specularProduct([1,1,1,1]));
        this.dfV.push(light.diffuseProduct([1,1,1,1]));   
        this.normalVectors.push(normal);

        this.points.push(vec4(this.vertices[bottomLeft]));
        this.amV.push(light.ambientProduct(color));
        this.spV.push(light.specularProduct([1,1,1,1]));
        this.dfV.push(light.diffuseProduct([1,1,1,1]));   
        this.normalVectors.push(normal);
    }
     
    this.setVertices();
    this.makeCuboid();
}

SolidCuboid.prototype = Object.create(Shape.prototype);
SolidCuboid.prototype.constructor = SolidCuboid;
