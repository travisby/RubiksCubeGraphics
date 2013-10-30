function RubiksCube(colors) {
    Model.apply(this, []);
    this.colors = colors; 
    this.cubes = [];
    var count = 0;
    var mat = new Material(vec4(.1,.1,.1,1), vec4(.1,.1,.1,1), vec4(.1,.1,.1,1), 100);
    
    for(var x = 0; x <= 2; x++) {
        this.cubes[x] = [];
       
         for(var y = 0; y <= 2; y++) {
            this.cubes[x][y] = [];
             for(var z = 0; z <= 2; z++) {
                var c = this.colors[count];
                console.log(c);
                console.log(x);
                console.log(y);
                console.log(z); 
                console.log(count);
                console.log("------------"); 
                if(x == 1 && y == 1 && z == 1) {
                    console.log("Test");
                }
                else {
                    count++;
                    this.cubes[x][y][z] = new SolidCube(mat, c);
                    this.add(this.cubes[x][y][z]);
                    this.cubes[x][y][z].move((x - 1) * 1.1, X_AXIS);
                    this.cubes[x][y][z].move((y - 1) * 1.1, Y_AXIS);
                    this.cubes[x][y][z].move((z - 1) * 1.1, Z_AXIS);
                }
            }
        }    
    } 
}

RubiksCube.prototype = Object.create(Model.prototype);
RubiksCube.prototype.constructor = RubiksCube;


function RubiksCubeFromString(input) {
   
    colors = charsToColors(input);
    cubeColors = [];
    cubeColors[0]   = new CubeColors([BO,BA,L], [colors[12], colors[6], colors[11]]); 
    cubeColors[1]   = new CubeColors([BO,L],    [colors[21], colors[20]]); 
    cubeColors[2]   = new CubeColors([BO,F,L],  [colors[30], colors[36], colors[29]]); 
    cubeColors[3]   = new CubeColors([BA,L],    [colors[3], colors[10]]); 
    cubeColors[4]   = new CubeColors([L],       [colors[19]]); 
    cubeColors[5]   = new CubeColors([L, F],    [colors[28], colors[39]]); 
    cubeColors[6]   = new CubeColors([L,BA,T],  [colors[9], colors[0], colors[51]]); 
    cubeColors[7]   = new CubeColors([L, T],    [colors[18], colors[48]]); 
    cubeColors[8]   = new CubeColors([L, T, F], [colors[27], colors[45], colors[42]]); 
    cubeColors[9]   = new CubeColors([BO, BA],  [colors[13], colors[7]]); 
    cubeColors[10]  = new CubeColors([BO],      [colors[22]]); 
    cubeColors[11]  = new CubeColors([BO,F],    [colors[31], colors[37]]); 
    cubeColors[12]  = new CubeColors([BA],      [colors[4]]); 
    cubeColors[13]  = new CubeColors([F],       [colors[40]]); 
    cubeColors[14]  = new CubeColors([BA, T],   [colors[1], colors[52]]); 
    cubeColors[15]  = new CubeColors([T],       [colors[49]]); 
    cubeColors[16]  = new CubeColors([F, T],    [colors[43], colors[46]]); 
    cubeColors[17]  = new CubeColors([BO,BA,R], [colors[14], colors[8], colors[15]]); 
    cubeColors[18]  = new CubeColors([BO,R],    [colors[23], colors[24]]); 
    cubeColors[19]  = new CubeColors([BO,F,R],  [colors[32], colors[38], colors[33]]); 
    cubeColors[20]  = new CubeColors([BA,R],    [colors[5], colors[15]]); 
    cubeColors[21]  = new CubeColors([R],       [colors[25]]); 
    cubeColors[22]  = new CubeColors([R, F],    [colors[34], colors[41]]); 
    cubeColors[23]  = new CubeColors([R,BA,T],  [colors[17], colors[2], colors[53]]); 
    cubeColors[24]  = new CubeColors([R, T],    [colors[26], colors[50]]); 
    cubeColors[25]  = new CubeColors([R, T, F], [colors[35], colors[47], colors[44]]);

    return new RubiksCube(cubeColors);
 }

























 
