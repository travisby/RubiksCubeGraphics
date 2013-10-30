function Light() {
    this.position   = vec4();
    this.ambient    = vec4();
    this.diffuse    = vec4();
    this.specular   = vec4();
}

Light.prototype.setAmbient = function(red, green, blue, alpha) {
    this.ambient = vec4(red, green, blue, alpha);
}

Light.prototype.setDiffuse = function(red, green, blue, alpha) {
    this.diffuse = vec4(red, green, blue, alpha);
}

Light.prototype.setPosition = function(red, green, blue, alpha) {
    this.position = vec4(red, green, blue, alpha);
}

Light.prototype.setSpecular = function(red, green, blue, alpha) {
    this.specular = vec4(red, green, blue, alpha);
}

Light.prototype.ambientProduct = function(material) {
    return mult(this.ambient, material.ambient);
}

Light.prototype.diffuseProduct = function(material) {
    return mult(this.diffuse, material.diffuse);
}

Light.prototype.specularProduct = function(material) {
    return mult(this.specular, material.specular);
} 


