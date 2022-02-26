
const arr=["3","78","56","78","89"]
console.log("sort in ascending order ", arr.sort())
console.log('sort in descending order', arr.sort().reverse())
console.log("second smallest ele " ,arr.sort()[1])
console.log("second largest ele",arr.sort()[arr.length-2])


var arr1 = ['20','120','111','215','54','78'];

arr1.sort(function(a,b){
    return b-a;
});

console.log(arr1[2]);

function divisible(n)
{
    for (var num=0; num<=n;num++){
        if(num%3==0&& num%5==0)
     console.log(num)
    }
}
// let n=20;
console.log(divisible(20));


function reverseNumber(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverseNumber(3224));


for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

