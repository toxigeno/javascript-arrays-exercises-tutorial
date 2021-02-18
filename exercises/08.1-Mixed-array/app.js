var mix = [42, true, "towel", [2, 1], 'hello', 34.4, { "name": "juan" }];

//your code here
let itemType = [];
for (let i = 0; i < mix.length; i++) {
    itemType.push(typeof (mix[i]));
};

console.log(itemType);