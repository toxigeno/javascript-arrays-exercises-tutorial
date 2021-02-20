let theArray = [2,13,34,5];
let otroArray = [12,3,37,5];

function sumTheElements(arr){
    var total = 0;
    for (let i = 0; i < arr.length; i++) {
         total = arr[i] + total;
    }
	return total;
}
let suma1 = sumTheElements(theArray);
let suma2 = sumTheElements(otroArray);
