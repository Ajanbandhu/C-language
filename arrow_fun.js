// one parameter, and a single return statement

const sqr=x=>x*x;
console.log(sqr(2));

//----------------------------------------------------------------------------------

//   multiple statement ,and single return expression

const sum =(a,b) => a+b;
console.log(sum(2,4));

//--------------------------------------------------------------------------------------------------------

// Return object

const sumofdiff=(m,n) =>
(
    {
        sum:m+n,diffrence:m-n
    }
);
let output1=sumofdiff(5,3);
console.log(output1);