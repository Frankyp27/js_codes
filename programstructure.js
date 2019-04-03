

  for (let number = 0; number <= 12; number = number + 2) {
      console.log(number);
  }

  let result = 1;
  for (let counter = 0; counter < 10; counter = counter + 1){
      result = result * 2;
  }
  console.log(result);   // for loop

  for (let current = 20; ; current = current + 1){
      if (current % 7 == 0){
          console.log(current);
          break;
      }
  } //This program illustrates the break statement. It finds the first number that is both greater than or equal to 20 and divisible by 7

  for (let number = 0; number <= 12; number += 2){
      console.log(number);
  }//updating bindings succintly. This allows us to shorten our counting example a little more.


let abc = "abc";//a loop that makes seven calls to console.log to output the following triangle:

console.log(abc.length);