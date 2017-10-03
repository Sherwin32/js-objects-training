/*

  Create a function `parseQueryString` that accepts a query string parameter as an argument, and
  converts it into an object, using the following rules:

    * An equals sign (`=`) separates a *key* on the left from a *value* on the right.
    * An ampersand (`&`) separates key-value pairs from each other.
    * All keys and values should be parsed as Strings.
    * The query string will not contain spaces.

  Here are some example inputs and outputs (mind the edge cases!):

  ```javascript
  parseQueryString("");
  //=> {}

  parseQueryString("a=1");
  //=> {
  //    "a": "1",
  //   }

  parseQueryString("first=alpha&last=omega");
  //=> {
  //    "first": "alpha",
  //    "last": "omega"
  //   }

  parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10");
  //=> {
  //    "a": "apple",
  //    "b": "blueberry",   // "blueberry" overwrites "beet"!
  //    "c": "",            // empty string (missing value)
  //    "d": "10"           // "10" is a String!
  //   }
  ```

  Mega Bonus
  - Can you create the reverse function? Given an object, output a Query Parameter String:

    ``` javascript
    var o = {first: "alpha", last: "omega"};
    convertToQueryParameter(o); // "first=alpha&last=omega";
    ```

*/

// YOUR CODE HERE
function parseQueryString(stringIn){
  var stringToArray = stringIn.split("");
  var nameBuffer = [];
  var valueBuffer = [];
  var nameString = "";
  var valueString = "";
  var flag = "name";
  var outputObj = {};

  stringToArray.forEach(function(letter){
    if(flag==="name"){
      if(letter!=="="){
        nameBuffer.push(letter);
      }else{
        nameString = nameBuffer.join("");
        flag="value";
      }
    }else if(flag==="value"){
      if(letter!=="&"){
        valueBuffer.push(letter);
      }else{
        valueString = valueBuffer.join("");
        outputObj[nameString] = valueString;
        flag="name";
        valueBuffer = [];
        nameBuffer = [];
      }
    }
  });
  valueString = valueBuffer.join("");
  outputObj[nameString] = valueString; //This is for the last one that meets now '&' to fit the if statements up there

  return outputObj;
}

console.log(parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10"));
console.log(parseQueryString("first=alpha&last=omega"));