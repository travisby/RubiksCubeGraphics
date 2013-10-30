/**
 * Nice cube to use for drawing
 * @param {Material} material
 * @param {CubeColors} colors
 * @constructor
 */
function FancySolidCube(material, colors) {
    Shape.apply(this, [material, colors]);
    this.vertices = [
        
        //Cube corners
        [-0.5,  0.5,  0.5], //0
        [-0.5,  0.5, -0.5], //1
        [-0.5, -0.5,  0.5], //2
        [-0.5, -0.5, -0.5], //3
        [ 0.5,  0.5,  0.5], //4
        [ 0.5,  0.5, -0.5], //5
        [ 0.5, -0.5,  0.5], //6
        [ 0.5, -0.5, -0.5], //7
        
        //Left Side
        [-0.6, -0.4,  0.4], //8 
        [-0.6, -0.4, -0.4], //9
        [-0.6,  0.4,  0.4], //10
        [-0.6,  0.4, -0.4], //11
        
        //Right Side
        [ 0.6, -0.4,  0.4], //12
        [ 0.6, -0.4, -0.4], //13
        [ 0.6,  0.4,  0.4], //14
        [ 0.6,  0.4, -0.4], //15
        
        //Top
        [-0.4,  0.6,  0.4], //16
        [-0.4,  0.6, -0.4], //17
        [ 0.4,  0.6,  0.4], //18
        [ 0.4,  0.6, -0.4], //19
        
        //Bottom 
        [-0.4, -0.6,  0.4], //20
        [-0.4, -0.6, -0.4], //21
        [ 0.4, -0.6,  0.4], //22
        [ 0.4, -0.6, -0.4], //23
          
        //Front 
        [-0.4,  0.4,  0.6], //24
        [-0.4, -0.4,  0.6], //25
        [ 0.4,  0.4,  0.6], //26
        [ 0.4, -0.4,  0.6], //27

        //Back
        [-0.4,  0.4, -0.6], //28
        [-0.4, -0.4, -0.6], //29
        [ 0.4,  0.4, -0.6], //30
        [ 0.4, -0.4, -0.6]  //31

        ];

  /**
   * Makes each side of the cube
   */
    this.makeCube = function() {
        this.makeSide(0,4,2,6,24,26,25,27,this.colors[0]); //Front
        this.makeSide(1,0,3,2,11,10,9,8,this.colors[1]); //LEFT
        this.makeSide(1,5,0,4,17,19,16,18,this.colors[2]); //TOP
        this.makeSide(4,5,6,7,14,15,12,13,this.colors[3]); //RIGHT
        this.makeSide(5,1,7,3,30,28,31,29,this.colors[4]); //BACK
        this.makeSide(2,6,3,7,20,22,21,23,this.colors[5]); //BOTTOM
    }

  /**
   * Builds just one side of a cube
   * @param {Number} cubeTL
   * @param {Number} cubeTR
   * @param {Number} cubeBL
   * @param {Number} cubeBR
   * @param {Number} outTL
   * @param {Number} outTR
   * @param {Number} outBL
   * @param {Number} outBR
   * @param {Number[]} color
   */
    this.makeSide = function(cubeTL, cubeTR, cubeBL, cubeBR, outTL, outTR, outBL, outBR, color) {
            
        
        if(color[0] == 0 && color[1] == 0 && color[2] == 0) {
       
            var t1 = subtract(this.vertices[cubeTR], this.vertices[cubeTL]);
            var t2 = subtract(this.vertices[cubeBR], this.vertices[cubeTR]);
            var normal = cross(t1, t2);
            normal = vec3(normal);
            normal = normalize(normal);
       
            this.points.push(vec4(this.vertices[cubeTL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);

            this.points.push(vec4(this.vertices[cubeTR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);

            this.points.push(vec4(this.vertices[cubeBR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);

            this.points.push(vec4(this.vertices[cubeTL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);

            this.points.push(vec4(this.vertices[cubeBR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);

            this.points.push(vec4(this.vertices[cubeBL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);

        } else {
                
            var t1 = subtract(this.vertices[outBL], this.vertices[cubeBL]);
            var t2 = subtract(this.vertices[outBR], this.vertices[cubeBR]);
            var normal = cross(t1, t2);
            normal = vec3(normal);
            normal = normalize(normal);
    
            this.points.push(vec4(this.vertices[cubeBL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);

            this.points.push(vec4(this.vertices[outBL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
    
            this.points.push(vec4(this.vertices[outBR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            //---------------

            this.points.push(vec4(this.vertices[cubeBL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
        
            this.points.push(vec4(this.vertices[outBR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);

            this.points.push(vec4(this.vertices[cubeBR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);

            //------------------


            t1 = subtract(this.vertices[outTL], this.vertices[cubeTL]);
            t2 = subtract(this.vertices[outBL], this.vertices[cubeBL]);
            normal = cross(t1, t2);
            normal = vec3(normal);
            normal = normalize(normal);

            this.points.push(vec4(this.vertices[cubeBL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[outBL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[outTL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            //-----------------

            this.points.push(vec4(this.vertices[cubeBL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[outTL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[cubeTL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            
            t1 = subtract(this.vertices[outTL], this.vertices[cubeTL]);
            t2 = subtract(this.vertices[outTR], this.vertices[cubeTR]);
            normal = cross(t1, t2);
            normal = vec3(normal);
            normal = normalize(normal);

            //-----------------
            
            this.points.push(vec4(this.vertices[cubeTL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[outTL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[outTR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            //-----------------

            this.points.push(vec4(this.vertices[cubeTL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[outTR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[cubeTR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            //-----------------

            t1 = subtract(this.vertices[outTR], this.vertices[cubeTR]);
            t2 = subtract(this.vertices[outBR], this.vertices[cubeBR]);
            normal = cross(t1, t2);
            normal = vec3(normal);
            normal = normalize(normal);

            this.points.push(vec4(this.vertices[cubeTR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[outTR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[outBR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            //-----------------
            
            this.points.push(vec4(this.vertices[cubeTR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[outBR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[cubeBR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            //-----------------
            
            t1 = subtract(this.vertices[outTR], this.vertices[outTL]);
            t2 = subtract(this.vertices[outBR], this.vertices[outTR]);
            normal = cross(t1, t2);
            normal = vec3(normal);
            normal = normalize(normal);
            
            this.points.push(vec4(this.vertices[outTL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[outTR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[outBR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            //-----------------
           
            this.points.push(vec4(this.vertices[outTL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[outBR]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
            this.points.push(vec4(this.vertices[outBL]));
            this.colorVectors.push(vec4(color));
            this.normalVectors.push(normal);
            
        }
    }
    
    this.makeCube();
        
}

FancySolidCube.prototype = Object.create(Shape.prototype);
FancySolidCube.prototype.constructor = FancySolidCube;
























