var mySampleArray = [3423, 5, 4, 47889, 654, 8, 867543, 23, 48, 56432, 55, 23, 25, 12];

var initialValue = mySampleArray.splice(mySampleArray/2);
var stopValue = mySampleArray.splice(mySampleArray.length-1);
var increasingValue = 1;

for (var i = initialValue; i < stopValue; i = i + increasingValue) {
    console.log(mySampleArray[i / 2]);
}

