/*

  In this challenge you will simulate the movement of a ping-pong, bouncing back and forth across a
  table.

  Create a function `pingPong` that accepts an array, and returns the *same* array
  with the ping-pong moved one cell. Each time the ping-pong moves, you must increment the
  ping-pong's `steps` counter by 1. The direction of movement should be determined soley by the
  current state of the array and the current `steps` value of the ping-pong.

  ``` javascript
  var table = [{steps: 0}, null, null, null];

  pingPong(table); //=> [null, {steps: 1}, null, null]
  pingPong(table); //=> [null, null, {steps: 2}, null]
  pingPong(table); //=> [null, null, null, {steps: 3}]
  pingPong(table); //=> [null, null, {steps: 4}, null]
  pingPong(table); //=> [null, {steps: 5}, null, null]
  pingPong(table); //=> [{steps: 6}, null, null, null]
  pingPong(table); //=> [null, {steps: 7}, null, null]

  table; //=> [null, {steps: 7}, null, null]
  ```

  Keep in mind that I should be able start this process at *any* point:

  ```
  var table = [null, {steps: 13}, null, null];
  pingPong(table); //=> [null, null, {steps: 14}, null]
  ```

  Bonuses
  - Allow arrays of *any length*
  - We can think of the ping-pong as having an internal "speed" of 1. Allow this value to be
    explicity set at a higher number (i.e. move 2 cells at a time, or 3 cells at a time).
  - Support multiple ping-pongs.

*/

// YOUR CODE HERE
var table = [{steps: 0}, null, null, null];
function pingPong(tableIn){
  this.table = tableIn;
  // this.direction="right";
  this.direction;
  this.steps = 0;
  var flag = 0;
  for(var i=0; i<tableIn.length; i++){
    var cell = this.table[i];
    var index = i;
    if(cell){
      flag = index;
      this.steps = cell.steps;
      if(steps%(tableIn.length+2)<tableIn.length){
        this.direction = "right";
      }else{
        this.direction = "left";
      }
      if(index !== tableIn.length-1 && this.direction==="right"){
      steps++;
      this.table[index]=null;
      this.table[index+1]={steps: this.steps};
      break;
    }else if(index!==0 && this.direction==="left"){  //Bouncing backwords
      steps++;
      this.table[index]=null;
      this.table[index-1]={steps: this.steps};
      break;
    }else if(index === tableIn.length-1 && this.direction==="right"){   //reached the right end
      steps++;
      this.direction="left";
      this.table[index]=null;
      this.table[index-1]={steps: this.steps};
      break;
    }else if(index === 0 && this.direction==="left"){  //reached the left end again
      steps++;
      this.direction="right";
      this.table[index]=null;
      this.table[index+1]={steps: this.steps};
      break;
    }
    }

  }

  
  console.log(this.table);
  table = this.table;
}

pingPong(table);
pingPong(table);
pingPong(table);
pingPong(table);
pingPong(table);
pingPong(table);
pingPong(table);
pingPong(table);
pingPong(table);
pingPong(table);
pingPong(table);
pingPong(table);
pingPong(table);
pingPong(table);
pingPong(table);
pingPong(table);
pingPong(table);
pingPong(table);
