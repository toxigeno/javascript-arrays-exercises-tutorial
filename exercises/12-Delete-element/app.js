var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName){
    for (let i = 0; i < people.length; i++) {
       personName.splice(people[i]);
    }
};
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));