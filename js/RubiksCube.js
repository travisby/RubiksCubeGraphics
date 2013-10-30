function RubiksCube(colors) {
    Model.apply(this, []);
    if(colors != null && colors != undefined) {
        this.colors = colors; 
    } 
    this.cubes = [];
    var count = 0;

                   console.log(this.colors[0].getColors());
    for(var x = -1; x < 2; x++) {
        this.cubes[x] = [];
        for(var y = -1; y < 2; y++) {
            this.cubes[x][y] = [];
            for(var z = -1; z < 2; z++) {
                
                if(x == 0 && y == 0 && z == 0) {
                    continue;
                }
                else {
                    this.cubes[x][y][z] = new FancySolidCube(new Material(vec4(.1,.1,.1,1), vec4(.1,.1,.1,1), vec4(.1,.1,.1,1), 100), this.colors[count]);
                    this.cubes[x][y][z].move(x * 1.1, X_AXIS);
                    this.cubes[x][y][z].move(y * 1.1, Y_AXIS);
                    this.cubes[x][y][z].move(z * 1.1, Z_AXIS);
                    count++;
                    this.add(this.cubes[x][y][z]);
                }
            }
        }    
    } 
}

RubiksCube.prototype = Object.create(Model.prototype);
RubiksCube.prototype.constructor = RubiksCube;

RubiksCube.prototype.colors = [
    new CubeColors().massSet([BO,BA,L], [YELLOW, RED, GREEN]), 
    new CubeColors().massSet([BO,L],    [YELLOW, GREEN]), 
    new CubeColors().massSet([BO,F,L],  [YELLOW, ORANGE, GREEN]), 
    new CubeColors().massSet([BA,L],    [RED, GREEN]), 
    new CubeColors().massSet([L],       [GREEN]), 
    new CubeColors().massSet([L, F],    [GREEN, ORANGE]), 
    new CubeColors().massSet([L,BA,T],  [GREEN, RED, WHITE]), 
    new CubeColors().massSet([L, T],    [GREEN, WHITE]), 
    new CubeColors().massSet([L, T, F], [GREEN, WHITE, ORANGE]), 
    new CubeColors().massSet([BO, BA],  [YELLOW, RED]), 
    new CubeColors().massSet([BO],      [YELLOW]), 
    new CubeColors().massSet([BO,F],    [YELLOW, ORANGE]), 
    new CubeColors().massSet([BA],      [RED]), 
    new CubeColors().massSet([F],       [ORANGE]), 
    new CubeColors().massSet([BA, T],   [RED, WHITE]), 
    new CubeColors().massSet([T],       [WHITE]), 
    new CubeColors().massSet([F, T],    [ORANGE, WHITE]), 
    new CubeColors().massSet([BO,BA,R], [YELLOW, RED, BLUE]), 
    new CubeColors().massSet([BO,R],    [YELLOW, BLUE]), 
    new CubeColors().massSet([BO,F,R],  [YELLOW, ORANGE, BLUE]), 
    new CubeColors().massSet([BA,R],    [RED, BLUE]), 
    new CubeColors().massSet([R],       [BLUE]), 
    new CubeColors().massSet([R, F],    [BLUE, ORANGE]), 
    new CubeColors().massSet([R,BA,T],  [BLUE, RED, WHITE]), 
    new CubeColors().massSet([R, T],    [BLUE, WHITE]), 
    new CubeColors().massSet([R, T, F], [BLUE, WHITE, ORANGE])
    ]; 
