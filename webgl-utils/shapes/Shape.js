//Constants for the transformation methods
const X_AXIS = 0;
const Y_AXIS = 1;
const Z_AXIS = 2;

var Shape = function(shader, camera, light) {
        this._shader = shader;
        this._camera = camera;
        this._transformation = mat4();
        this._light = light;
 
        //The array of point vectors that are passed down to the shader   
        this._points = [];
        //The array of color vectors that are passed down to the shader
        this._colors = [];
        this.normals = []; 
        /**
         * Sets the shader for this shape. 
         *
         * Note: This method MUST be called to initilize the object completely.
         * 
         * @param shader The shader program this shape should use
         */ 
        this.setShader = function(shader) {
            _shader = shader;
        }
        
        /**
         * Sets the camera for this shape. 
         *
         * Note: This method MUST be called to initilize the object completely.
         * 
         * @param camera The camera this shape should use
         */ 
        this.setCamera = function(camera) {
            _camera = camera;
        }
        
        /**
         * Sets the points array. Should be used by a subclass. 
         */ 
        this.setPoints = function(points) {
            _points = points;
        }

        /**
         * Sets the colors array. Should be used by a subclass. 
         */
        this.setColors = function(colors) {
            _colors = colors;
        }
        
}

Shape.prototype.draw = function() {
    if(this._shader == null || this._camera == null || gl == null) {
        console.error("Shape not initilizaed properly.");
    }
    else {    
        gl.useProgram(this._shader);
        
        gl.uniformMatrix4fv(gl.getUniformLocation(this._shader, "projection"), false, flatten(this._camera.getProjection()));
        gl.uniformMatrix4fv(gl.getUniformLocation(this._shader, "transformation"), false, flatten(this._transformation));
        
        gl.uniform4fv(gl.getUniformLocation(this._shader, "ambientProduct"), flatten(this._light.ambientProduct()));
        gl.uniform4fv(gl.getUniformLocation(this._shader, "diffuseProduct"), flatten(this._light.diffuseProduct()));
        gl.uniform4fv(gl.getUniformLocation(this._shader, "specularProduct"), flatten(this._light.specularProduct()));  
        gl.uniform4fv(gl.getUniformLocation(this._shader, "lightPosition"), flatten(this._light.position));
        gl.uniform1f(gl.getUniformLocation(this._shader, "shininess"), this._light.shininess());
 
        
        gl.bindBuffer( gl.ARRAY_BUFFER, this._pointBuffer );
        var positionVertex = gl.getAttribLocation( this._shader, "positionVertex" );
        gl.vertexAttribPointer( positionVertex, 4, gl.FLOAT, false, 0, 0 );
        gl.enableVertexAttribArray( positionVertex );
        
        gl.drawArrays( gl.TRIANGLES, 0, this._points.length);
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
        this.transform = mult(translate(delta), this._transformation);    
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
        gl.bufferData( gl.ARRAY_BUFFER, flatten(this.normals), gl.STATIC_DRAW );
        
        var vNormal = gl.getAttribLocation( this._shader, "normalVertex" );
        gl.vertexAttribPointer( vNormal, 4, gl.FLOAT, false, 0, 0 );
        //gl.enableVertexAttribArray( vNormal);

        //Creates a buffer for the point vector data 
        this._colorBuffer = gl.createBuffer();
        gl.bindBuffer( gl.ARRAY_BUFFER, this._colorBuffer); 
        gl.bufferData( gl.ARRAY_BUFFER, flatten(this._colors), gl.STATIC_DRAW );
        
        //Creates a buffer for the color vector data
        this._pointBuffer = gl.createBuffer();
        gl.bindBuffer( gl.ARRAY_BUFFER, this._pointBuffer);
        gl.bufferData( gl.ARRAY_BUFFER, flatten(this._points), gl.STATIC_DRAW );
}
