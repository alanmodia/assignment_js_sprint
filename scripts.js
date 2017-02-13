// FILL IN THE FUNCTIONS BELOW

// var sprintFunctions = {
//   largestEl: function(input){
//     // your code here
//     console.log(input);
//     return Math.max(...input);
//   },

var sprintFunctions = {

  largestEl: function(){
    // your code here
    var input = arguments[0];
    // console.log();
    return Math.max(...input);
  },

  
  reversed: function(){
    var input = arguments[0];
    // console.log(input);
    // your code here
    // return (input === '') ? '' : reversed(input.substr(1)) + input.charAt(0);
    // return (input === '') ? '' : this.(input.substr(1)) + input.charAt(0);
    // return (input === '') ? '' : (input.substr(1)) + input.charAt(0);
    // console.log(input.split("").reverse().join(""));
    return input.split("").reverse().join("");
  },


  loudSnakeCase: function(){
    // your code here
    var input = arguments[0];

      var str = input.replace(/\W+/g, "_");
      var lastLetter = str[str.length -1];
      if (lastLetter == '_') {
        str = str.slice(0, -1);
      }

      str = str.toLowerCase().split('_');

      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
      }

      str = str.join('_');
      return str;
  },


  compareArrays: function(){
    // your code here (replace the return)
    var array1 = arguments[0];
    var array2 = arguments[1];

    if(array1.length !== array2.length ) { return false; }

    for(var i=0; i<array1.length; i++){
      if(array2[i] !== array1[i]){ return false;}
    }
    return true;
  },


  fizzBuzz: function(){
    // your code here
    var input = arguments[0];
    var fizzBuzzArray = [];
    console.log(fizzBuzzArray);

    for (var number = 1; number <= input; number++) {
    if (number % 3 === 0 && number % 5 === 0)
      fizzBuzzArray.push("FIZZBUZZ");
    else if (number % 3 === 0)
      fizzBuzzArray.push("FIZZ");
    else if (number % 5 === 0)
      fizzBuzzArray.push("BUZZ");
    else
      fizzBuzzArray.push(number);
    }
    return fizzBuzzArray;
  },


  myMap: function(){
    // your code here
    var input = arguments[0];

    byTwo = function (el) {
      return el * 2;
    };
    return input.map(byTwo);
  },


  primes: function(){
    var input = arguments[0];
    var p = true;
    var pArr = [];

    for(i = 2; i <= input; i++) {
      p = true;
    for(div = 2; div < i; div++) {
      if(i % div ===0) {
        p = false;
        break;
      }
      }
      if(p === true) {
        pArr.push(i);
        console.log(pArr);
      }
    }
    return pArr;
  },

};