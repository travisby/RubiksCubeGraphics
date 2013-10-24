//Constants for the transformation methods
const X_AXIS = 0;
const Y_AXIS = 1;
const Z_AXIS = 2;

function Shape() {
    if(!gl) {
        console.log("Canvas needs to be initilized");
    }
    else {
        var _shader;
        var _camera;
        var _transformation = mat4();
        var _rotation = mat4();  
        
        //The array of point vectors that are passed down to the shader   
        var _points = [];
        //The array of color vectors that are passed down to the shader
        var _colors = [];
       
        //Creates a buffer for the point vector data 
        var _colorBuffer = gl.createBuffer();
        gl.bindBuffer( gl.ARRAY_BUFFER, _colorBuffer); 
        gl.bufferData( gl.ARRAY_BUFFER, flatten(_colors), gl.STATIC_DRAW );
        
        //Creates a buffer for the color vector data
        var _pointBuffer = gl.createBuffer();
        gl.bindBuffer( gl.ARRAY_BUFFER, _pointBuffer);
        gl.bufferData( gl.ARRAY_BUFFER, flatten(_points), gl.STATIC_DRAW );
        
        /**
         * Draws the shape
         */
        this.draw = function() {
            if(_shader == null || _camera == null || gl == null) {
                console.error("Shape not initilizaed properly.");
            }
            else {    
                gl.useProgram(_shader);

                gl.uniformMatrix4fv(gl.getUniformLocation(_shader, "projection"), false, flatten(_camera.getProjection()));
                gl.uniformMatrix4fv(gl.getUniformLocation(_shader, "transformation"), false, flatten(_transformation));
                gl.uniformMatrix4fv(gl.getUniformLocation(_shader, "rotation"), false, flatten(_rotation));
            
                gl.bindBuffer( gl.ARRAY_BUFFER, _colorBuffer );
                var colorVertex = gl.getAttribLocation( _shader, "vColor");
                gl.vertexAttribPointer( colorVertex, 4, gl.FLOAT, false, 0, 0 );
                gl.enableVertexAttribArray( colorVertex );
                
                gl.bindBuffer( gl.ARRAY_BUFFER, vertexBuffer );
                var positionVertex = gl.getAttribLocation( _shader, "vPosition" );
                gl.vertexAttribPointer( positionVertex, 4, gl.FLOAT, false, 0, 0 );
                gl.enableVertexAttribArray( positionVertex );
                
                gl.drawArrays( gl.TRIANGLES, 0, _points.length );
            }
        }
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
        
        /**
         * Moves this shape.
         *
         * @param distance The amount to move the shape
         * @param axis The direction to move the shape 
         * @author Matthew Johnson
         */ 
        this.move = function(distance, axis) {
            var delta = [0, 0, 0];

            if (axis === undefined) { 
                axis = Y_AXIS;
            }
            
            delta[axis] = dist;
            this.transform = mult(translate(delta), this.transform);    
        }
        
        /**
         * Rotates this shape.
         *
         * @param angle How far to rotate the shape
         * @param axis The axis to rotate around 
         * @author Matthew Johnson
         */ 
        this.rotate = function(angle, axis) {
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
        this.orbit = function(angle, axis) { 
            var avec = [0, 0, 0];

            if (axis === undefined) {
                axis = Y_AXIS;
            }
            
            avec[axis] = 1;
            this.transform = mult(rotate(angle, avec), this.transform);        
        }
    }
}
