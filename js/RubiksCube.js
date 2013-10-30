function RubiksCube(colors) {
    Model.apply(this, []);
    console.log(this.colors);
    if(colors != null && colors != undefined) {
        this.colors = colors; 
    } 
    this.cubes = [];
    var count = 0;

    for(var x = -1; x < 2; x++) {
        this.cubes[x] = [];
        for(var y = -1; y < 2; y++) {
            this.cubes[x][y] = [];
            for(var z = -1; z < 2; z++) {
                
                if(x == 0 && y == 0 && z == 0) {
                    continue;
                }
                else {
                    console.log(this.colors[count]);
                    this.cubes[x][y][z] = new FancySolidCube(this.colors[count]);
                    this.cubes[x][y][z].move(x * 1.1, X_AXIS);
                    this.cubes[x][y][z].move(y * 1.1, Y_AXIS);
                    this.cubes[x][y][z].move(z * 1.1, Z_AXIS);
                    count++;
                }
            }
        }    
    } 
}

RubiksCube.prototype = Object.create(Model.prototype);
RubiksCube.prototype.constructor = RubiksCube;

RubiksCube.prototype.colors = [
    NC().massSet([BO,BA,L], [YELLOW, RED, GREEN]), 
    NC().massSet([BO,L],    [YELLOW, GREEN]), 
    NC().massSet([BO,F,L],  [YELLOW, ORANGE, GREEN]), 
    NC().massSet([BA,L],    [RED, GREEN]), 
    NC().massSet([L],       [GREEN]), 
    NC().massSet([L, F],    [GREEN, ORANGE]), 
    NC().massSet([L,BA,T],  [GREEN, RED, WHITE]), 
    NC().massSet([L, T],    [GREEN, WHITE]), 
    NC().massSet([L, T, F], [GREEN, WHITE, ORANGE]), 
    NC().massSet([BO, BA],  [YELLOW, RED]), 
    NC().massSet([BO],      [YELLOW]), 
    NC().massSet([BO,F],    [YELLOW, ORANGE]), 
    NC().massSet([BA],      [RED]), 
    NC().massSet([F],       [ORANGE]), 
    NC().massSet([BA, T],   [RED, WHITE]), 
    NC().massSet([T],       [WHITE]), 
    NC().massSet([F, T],    [ORANGE, WHITE]), 
    NC().massSet([BO,BA,R], [YELLOW, RED, BLUE]), 
    NC().massSet([BO,R],    [YELLOW, BLUE]), 
    NC().massSet([BO,F,R],  [YELLOW, ORANGE, BLUE]), 
    NC().massSet([BA,R],    [RED, BLUE]), 
    NC().massSet([R],       [BLUE]), 
    NC().massSet([R, F],    [BLUE, ORANGE]), 
    NC().massSet([R,BA,T],  [BLUE, RED, WHITE]), 
    NC().massSet([R, T],    [BLUE, WHITE]), 
    NC().massSet([R, T, F], [BLUE, WHITE, ORANGE])
    ]; 
