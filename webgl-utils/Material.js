function Material(ambient, diffuse, specular, shininess) {
    this.ambient = ambient;
    this.diffuse = diffuse;
    this.specular = specular;
    this.shininess = shininess;
}

Material.prototype.getA = function() {
    return this.ambient;
}
