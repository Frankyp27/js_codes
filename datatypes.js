var x = 16 + 4 + "volvo";
console.log(x);

var x = "volvo" + 16 +4;
console.log(x);
// JavaScript evaluates expressions from left to right. Different sequences can produce different results:
//In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".

//In the second example, since the first operand is a string, all operands are treated as strings.

function myFunction (a,b){
    return a*b;
}
console.log(myFunction) // function declaration