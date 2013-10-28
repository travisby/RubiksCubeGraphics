//Constants for the transformation methods
const X_AXIS = 0;
const Y_AXIS = 1;
const Z_AXIS = 2;

var Shape = function(shader, camera, light) {
        this.shader = shader;
        this.camera = camera;
        this.transformation = mat4();
        this.light = light;
 
        //The array of point vectors that are passed down to the shader   
        this.points = [];
        //The array of color vectors that are passed down to the shader
        this.colors = [];
        this.normalVectors = []; 
        /**
         * Sets the shader for this shape. 
         *
         * Note: This method MUST be called to initilize the object completely.
         * 
         * @param shader The shader program this shape should use
         */ 
        this.setShader = function(shader) {
            shader = shader;
        }
        
        /**
         * Sets the camera for this shape. 
         *
         * Note: This method MUST be called to initilize the object completely.
         * 
         * @param camera The camera this shape should use
         */ 
        this.setCamera = function(camera) {
            camera = camera;
        }
        
        /**
         * Sets the points array. Should be used by a subclass. 
         */ 
        this.setPoints = function(points) {
            points = points;
        }

        /**
         * Sets the colors array. Should be used by a subclass. 
         */
        this.setColors = function(colors) {
            colors = colors;
        }
        
}

Shape.prototype.draw = function() {
    if(this.shader == null || this.camera == null || gl == null) {
        console.error("Shape not initilizaed properly.");
    }
    else {    
        gl.useProgram(this.shader);
        
        gl.uniformMatrix4fv(gl.getUniformLocation(this.shader, "projection"), false, flatten(this.camera.getProjection()));
        gl.uniformMatrix4fv(gl.getUniformLocation(this.shader, "transformation"), false, flatten(this.transformation));
        
        gl.uniform4fv(gl.getUniformLocation(this.shader, "ambientProduct"), flatten(this.light.ambientProduct()));
        gl.uniform4fv(gl.getUniformLocation(this.shader, "diffuseProduct"), flatten(this.light.diffuseProduct()));
        gl.uniform4fv(gl.getUniformLocation(this.shader, "specularProduct"), flatten(this.light.specularProduct()));  
        gl.uniform4fv(gl.getUniformLocation(this.shader, "lightPosition"), flatten(this.light.position));
        gl.uniform1f(gl.getUniformLocation(this.shader, "shininess"), this.light.shininess());
        
        gl.bindBuffer( gl.ARRAY_BUFFER, this.pointBuffer );
        var positionVertex = gl.getAttribLocation( this.shader, "positionVertex" );
        gl.vertexAttribPointer( positionVertex, 4, gl.FLOAT, false, 0, 0 );
        gl.enableVertexAttribArray( positionVertex );
        
        var vNormal = gl.getAttribLocation( this.shader, "normalVertex" );
        gl.vertexAttribPointer( vNormal, 4, gl.FLOAT, false, 0, 0 );
        gl.enableVertexAttribArray( vNormal);
        
        gl.drawArrays( gl.TRIANGLES, 0, this.points.length);
    }
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

Shape.prototype.setupWebGL = function() {
        
        var nBuffer = gl.createBuffer();
        gl.bindBuffer( gl.ARRAY_BUFFER, nBuffer);
        gl.bufferData( gl.ARRAY_BUFFER, flatten(this.normalVectors), gl.STATIC_DRAW );
        

        //Creates a buffer for the point vector data 
        this.colorBuffer = gl.createBuffer();
        gl.bindBuffer( gl.ARRAY_BUFFER, this.colorBuffer); 
        gl.bufferData( gl.ARRAY_BUFFER, flatten(this.colors), gl.STATIC_DRAW );
        
        //Creates a buffer for the color vector data
        this.pointBuffer = gl.createBuffer();
        gl.bindBuffer( gl.ARRAY_BUFFER, this.pointBuffer);
        gl.bufferData( gl.ARRAY_BUFFER, flatten(this.points), gl.STATIC_DRAW );
}
