

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
this.upDirection vec3();
}
/**
 * Moves the camera to the specifed (x,y,z) coordinates
 */
function move(x,y,z) {
this.eyeLocation = vec3(x,y,z);
}

/**
 * Aims the camera at the specifed (x,y,z) coordinates 
 */
function aim(x,y,z) {
this.eyeDirection = vec3(x,y,z);
}

/**
 * Positions the camera view so that the specifed (x,y,z) coordinates are above the top of the camera
 */ 
function setUpDirection(x,y,z) {
this.upDirection = vec3(x,y,z);
}

function setOrtho(left, right, bottom, top, near, far) {
this.projection = ortho(left, right, bottom, top, near, far);
}

function setPerspective(fov, aspect, near, far) {
this.projection = perspective(fov, aspect, near, far);
}

function getProjection() {
return mult(this.projection, lookAt(this.eyeLocation, this.eyeDirection, this.upDirection);
}
