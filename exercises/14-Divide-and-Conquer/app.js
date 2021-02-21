let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

let even = [];
let odd = [];

mergeTwoList.forEach(function(a, b){
    if (a % 2){
        even.push(a);
    }
    if(b != a){
        odd.push(b);
    }
});


console.log(mergeTwoList(list_of_numbers))

