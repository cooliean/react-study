// var Immutable = require('immutable');
// var map1 = Immutable.Map({a: 1, b: 2, c: 3});
// var map2 = map1.set('b', 50);
// console.log(map1);
// console.log(map2);
// var m1b = map1.get('b'); // 2
// var m2b = map2.get('b'); // 50
// console.info(`map1 b = ${m1b},map2 b  =  ${m2b}`);
//
//
// let myStuff = [
//     {name: 'henrik'}
// ];
// console.info(myStuff);
//
// myStuff = [...myStuff, {name: 'js lovin fool'}];
// console.info(myStuff);
//
// let counters = {
//     faves: 0,
//     forward: 20,
// }
// console.info(counters);
// // this creates a brand new copy overwriting just that key
// let counters11 =  Object.assign(counters,{faves: counters.faves + 120},{forward: counters.forward + 120});
// console.info(counters);
//
//
//
// let todos = [
//     { id: 1, text: 'have lunch'}
// ]
// console.info(todos);
// todos = [...todos, { id: 2, text: 'buy a cup of coffee'} ]
// todos = [...todos, { id: 3, text: 'buy a cup of coffee'} ]
// console.info(todos);

let cooliean = {name:"cooliean",department:"developer"};

let { name,department } = cooliean;

var state = {name, department};

console.log(state);
state = {...state, department: "resource", age: 10};
console.log(state);

