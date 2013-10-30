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
        this.colors = colors.getColors();

//Other class variables

        //The transformation matrix
        this.transformation = mat4();

        //The array of point vectors that are passed down to the shader   
        this.points = [];

        //The array of normal vectors used for lighting
        this.normalVectors = [];

        this.colorVectors = [];

        this.first = true;
        this.lock = false;
        this.delta; 
        this.axis;
}

Shape.prototype.smoothOrbit = function(delta, axis) {
    if(this.lock === false) {
        this.lock = true;
        this.delta = delta;
        this.axis = axis;
    }
}

/**
 * TODO: Write comment
 */
Shape.prototype.draw = function(gl, shader, light, camera) {
    if(this.first) {
        this.setupWebGL(gl, shader, light, camera);
        first = false;
    }
    
    if(this.lock) {
        if(this.delta < 0) {
            this.orbit(-5, this.axis);
            this.delta += 5;
            this.lock = (this.delta >= 0) ? false : true;
        }
        else if(this.delta > 0) {
            this.orbit(5, this.axis);
            this.delta -= 5;
            this.lock = (this.delta <= 0) ? false : true;
        }
        else {
            this.lock = false;
        }
    }
    gl.uniformMatrix4fv(gl.getUniformLocation(shader, "transformation"), false, flatten(this.transformation));
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
    this.transformation = mult(translate(delta), this.transformation);    
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
    this.transformation = mult(this.transformation, rotate(angle, avec));
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
    this.transformation = mult(rotate(angle, avec), this.transformation);        
}
/*
 * TODO: Write comment
 */
Shape.prototype.setupWebGL = function(gl, shader, light, camera) {
    gl.useProgram(shader);

    //Creates a buffer for the point vector data
    this.pointBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, this.pointBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(this.points), gl.STATIC_DRAW );

    var positionVertex = gl.getAttribLocation( shader, "positionVertex" );
    gl.vertexAttribPointer( positionVertex, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( positionVertex );
    
    //Creates a buffer for the color vector data
    this.colorBuffer = gl.createBuffer();
    
    gl.bindBuffer( gl.ARRAY_BUFFER, this.colorBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(this.colorVectors), gl.STATIC_DRAW );
    var vertexColor = gl.getAttribLocation( shader, "vertexColor" );
    gl.vertexAttribPointer( vertexColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vertexColor );
    
    //Creates a buffer for the normal vector data
    gl.bindBuffer(gl.ARRAY_BUFFER, this.pointBuffer);    
    var normalVertex = gl.getAttribLocation( shader, "normalVertex" );
    gl.vertexAttribPointer( normalVertex, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( normalVertex );
   
    gl.uniformMatrix4fv(gl.getUniformLocation(shader, "projection"), false, flatten(camera.getProjection()));
    gl.uniform4fv(gl.getUniformLocation(shader, "ambientProduct"), flatten(light.ambientProduct(this.material)));
    gl.uniform4fv(gl.getUniformLocation(shader, "diffuseProduct"), flatten(light.diffuseProduct(this.material)));
    gl.uniform4fv(gl.getUniformLocation(shader, "specularProduct"), flatten(light.specularProduct(this.material)));  
    gl.uniform4fv(gl.getUniformLocation(shader, "lightPosition"), flatten(light.position));
    gl.uniform1f(gl.getUniformLocation(shader, "shininess"), this.material.shininess);
    
    gl.drawArrays( gl.TRIANGLES, 0, this.points.length);
}
