function Shape(shader, projection) {
    var _shader = shader;
    var _projection = projection;
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

        gl.uniformMatrix4fv(gl.getUniformLocation(_shader, "projection"), false, flatten(_projection));
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
}
