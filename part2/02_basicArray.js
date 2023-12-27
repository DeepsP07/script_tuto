// const heros =["Ranveer","Yash","Sudeep"]
// const superhero =["salman","sharuk","vijay"]
// // let specialH =heros.concat(superhero)
// const specialH =[...heros,...superhero]
// console.log(specialH);

const another_arr =[1,2,34,5,4,[7,5,3,1,[6,5,]]]
console.log(another_arr.flat(Infinity));

let sname="Deepali"
console.log(Array.from(sname));
console.log(Array.from({name:"DSASD"}));//intresting arrey

let score1 =300
let score2=400
let score3=500

console.log(Array.of(score1,score2,score3));