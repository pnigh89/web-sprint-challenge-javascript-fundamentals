// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker1 {
    constructor(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
  }
  
  volume(){
    return this.length * this.width * this.height;
  }

//   CuboidMaker.prototype.volume = function (){
//     return this.length * this.width * this.height;
//  }
 
 surfaceArea(){
    return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))
 }
    

    }

let cuboid1 = new CuboidMaker1(4, 5, 5)
//  CuboidMaker.prototype.surfaceArea = function() { 
//     return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))
//  }

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker1 {
    constructor(length, width, height){
        super(length, width, height);
    }

    cubeVol(){
    return this.length ** 3;
    }

    cubeSurfaceArea(){
    return 6 * (this.length**2)
    }

    
    
}
let cube = new CubeMaker(4, 4, 4);
console.log(cube.cubeVol());
console.log(cube.cubeSurfaceArea());