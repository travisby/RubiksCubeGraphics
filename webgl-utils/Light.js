function Light(material) {
    this.position;
    this.ambient;
    this.diffuse;
    this.specular;
    this.material = material;
}

Light.prototype.setAmbient = function(a, b, c, d) {
    this.ambient = vec4(a,b,c,d);
}

Light.prototype.setDiffuse = function(a, b, c, d) {
    this.diffuse = vec4(a,b,c,d);
}

Light.prototype.setPosition = function(a,b,c,d) {
    this.position = vec4(a,b,c,d);
}

Light.prototype.setSpecular = function(a,b,c,d) {
    this.specular = vec4(a,b,c,d);
}

Light.prototype.shininess = function() {
    return this.material.shininess;
}

Light.prototype.ambientProduct = function() {
    return mult(this.ambient, this.material.ambient);
}

Light.prototype.diffuseProduct = function() {
    return mult(this.diffuse, this.material.diffuse);
}

Light.prototype.specularProduct = function() {
    return mult(this.specular, this.material.specular);
} 


