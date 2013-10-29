/**
 * Object to represent a WebGL shape. Must be extended to be functional.
 *
 * @author Travis Beatty, Jacob Leach
 */

//Constants for the transformation methods
const X_AXIS = 0;
const Y_AXIS = 1;
const Z_AXIS = 2;

/**
 * Constructor for the Shape object
 *
 * @param material TODO: Write
 */
var Shape = function(material, colors) {

//Constructor parameter class variables

        this.material = material;
        this.colors = colors;

//Other class variables

        //The transformation matrix
        this.transformation = mat4();

        //The array of point vectors that are passed down to the shader   
        this.points = [];

        //The array of normal vectors used for lighting
        this.normalVectors = [];

        this.colorVectors = []; 
}

/**
 * TODO: Write comment
 */
Shape.prototype.draw = function(gl, shader, light, camera) {
    gl.useProgram(shader);
    
    gl.uniformMatrix4fv(gl.getUniformLocation(shader, "projection"), false, flatten(camera.getProjection()));
    gl.uniformMatrix4fv(gl.getUniformLocation(shader, "transformation"), false, flatten(this.transformation));
    
    gl.uniform4fv(gl.getUniformLocation(shader, "ambientProduct"), flatten(light.ambientProduct(this.material)));
    gl.uniform4fv(gl.getUniformLocation(shader, "diffuseProduct"), flatten(light.diffuseProduct(this.material)));
    gl.uniform4fv(gl.getUniformLocation(shader, "specularProduct"), flatten(light.specularProduct(this.material)));  
    gl.uniform4fv(gl.getUniformLocation(shader, "lightPosition"), flatten(light.position));
    gl.uniform1f(gl.getUniformLocation(shader, "shininess"), this.material.shininess);
    
    gl.bindBuffer( gl.ARRAY_BUFFER, this.pointBuffer );
    var positionVertex = gl.getAttribLocation( shader, "positionVertex" );
    gl.vertexAttribPointer( positionVertex, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( positionVertex );
    
    gl.bindBuffer( gl.ARRAY_BUFFER, this.colorBuffer );
    var vertexColor = gl.getAttribLocation( shader, "vertexColor" );
    gl.vertexAttribPointer( vertexColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vertexColor );
    
    //gl.bindBuffer( gl.ARRAY_BUFFER, this.normalBuffer );
    var normalVertex = gl.getAttribLocation( shader, "normalVertex" );
    gl.vertexAttribPointer( normalVertex, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( normalVertex );
    
    gl.drawArrays( gl.TRIANGLES, 0, this.points.length);
}


/**
 * Moves this shape.
 *
 * @param distance The amount to move the shape
 * @param axis The direction to move the shape 
 * @author Matthew Johnson
 */ 
Shape.prototype.move = function(distance, axis) {
    var delta = [0,0,0];

    if (axis === undefined) { 
        axis = Y_AXIS;
    }
    
    delta[axis] = distance;
    this.transform = mult(translate(delta), this.transformation);    
}
    
/**
 * Rotates this shape.
 *
 * @param angle How far to rotate the shape
 * @param axis The axis to rotate around 
 * @author Matthew Johnson
 */ 
Shape.prototype.rotate = function(angle, axis) {
    var avec = [0, 0, 0];

    if (axis === undefined) {
        axis = Y_AXIS;
    }

    avec[axis] = 1;
    this.transform = mult(this.transform, rotate(angle, avec));
}
    
/**
 * Orbits this shape.
 *
 * @param angle How far to orbit the shape
 * @param axis The axis to orbit around 
 * @author Matthew Johnson
 */ 
Shape.prototype.orbit = function(angle, axis) { 
    var avec = [0, 0, 0];

    if (axis === undefined) {
        axis = Y_AXIS;
    }
    
    avec[axis] = 1;
    this.transform = mult(rotate(angle, avec), this.transform);        
}
/*
 * TODO: Write comment
 */
Shape.prototype.setupWebGL = function(gl) {
        
    //Creates a buffer for the normal vector data
    var normalBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(this.normalVectors), gl.STATIC_DRAW );

    //Creates a buffer for the point vector data
    this.pointBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, this.pointBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(this.points), gl.STATIC_DRAW );

    //Creates a buffer for the color vector data
    this.colorBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, this.colorBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(this.colorVectors), gl.STATIC_DRAW );
}
