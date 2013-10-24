/**
* A simple WebGl Camera.
*
* @author Travis Beatty, Jacob Leach 
*/

function Camera() {
    /**
    * Set up the projection matrix
    */
    this.projection = mat4();

    /**
    * Set up variables to control what the camera is looking at
    */
    this.eyeLocation = vec3();
    this.eyeDirection = vec3();
    this.upDirection = vec3();

    /**
    * Moves the camera to the specifed (x,y,z) coordinates
    */
    this.move = function(x,y,z) {
        this.eyeLocation = vec3(x,y,z);
    }

    /**
    * Aims the camera at the specifed (x,y,z) coordinates 
    */
    this.aim = function(x,y,z) {
        this.eyeDirection = vec3(x,y,z);
    }

    /**
    * Positions the camera view so that the specifed (x,y,z) coordinates are above the top of the camera
    */ 
    this.direction = function(x,y,z) {
        this.upDirection = vec3(x,y,z);
    }
    
    /**
    * Sets up an orthographics projection for the camera
    */
    this.setOrtho = function(left, right, bottom, top, near, far) {
        this.projection = ortho(left, right, bottom, top, near, far);
    }
    
    /**
    * Sets up a perspective projection for the camera
    */
    this.setPerspective = function(fov, aspect, near, far) {
        this.projection = perspective(fov, aspect, near, far);
    }
    
    /**
    * Computes and returns the projection matrix
    */ 
    this.getProjection = function() {
        return mult(this.projection, lookAt(this.eyeLocation, this.eyeDirection, this.upDirection));
    }
}
