const X_AXIS = 0;
const Y_AXIS = 1;
const Z_AXIS = 2;

function Shape() {
    var _shader;
    var camera;
    var _transformation = mat4();
    var _rotation = mat4();  

    var _points = [];
    var _colors = [];
    
    var _colorBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, _colorBuffer); 
    gl.bufferData( gl.ARRAY_BUFFER, flatten(_colors), gl.STATIC_DRAW );
    
    var _pointBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, _pointBuffer);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(_points), gl.STATIC_DRAW );
    
    this.draw = function() {
        gl.useProgram(_shader);

        gl.uniformMatrix4fv(gl.getUniformLocation(_shader, "projection"), false, flatten(camera));
        gl.uniformMatrix4fv(gl.getUniformLocation(_shader, "transformation"), false, flatten(_transformation));
        gl.uniformMatrix4fv(gl.getUniformLocation(_shader, "rotation"), false, flatten(_rotation));
    
        gl.bindBuffer( gl.ARRAY_BUFFER, _colorBuffer );
        var colorVertex = gl.getAttribLocation( _shader, "vColor";
        gl.vertexAttribPointer( colorVertex, 4, gl.FLOAT, false, 0, 0 );
        gl.enableVertexAttribArray( colorVertex );
        
        gl.bindBuffer( gl.ARRAY_BUFFER, vertexBuffer );
        var positionVertex = gl.getAttribLocation( _shader, "vPosition" );
        gl.vertexAttribPointer( positionVertex, 4, gl.FLOAT, false, 0, 0 );
        gl.enableVertexAttribArray( positionVertex );
        
        gl.drawArrays( gl.TRIANGLES, 0, _points.length );
     }
    
    this.setShader(shader) {
        _shader = shader;
    }
    
    this.setCamera(camera) {
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

    this.move = function(distance, axis) {
        var delta = [0, 0, 0];

        if (axis === undefined) { 
            axis = Y_AXIS;
        }
        
        delta[axis] = dist;
        this.transform = mult(translate(delta), this.transform);    
    }

    this.rotate = function(angle, axis) {
         var avec = [0, 0, 0];

        if (axis === undefined) {
            axis = Y_AXIS;
        }

        avec[axis] = 1;
        this.transform = mult(this.transform, rotate(angle, avec));
    }
    
    this.orbit = function(angle, axis) { 
        var avec = [0, 0, 0];

        if (axis === undefined) {
            axis = Y_AXIS;
        }
        
        avec[axis] = 1;
        this.transform = mult(rotate(angle, avec), this.transform);        
    }
}
