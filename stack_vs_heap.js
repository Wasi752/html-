const x = 200;
let y = x;
y = y + 5;
console.log(x);
const z = [1, 2];
let a = z;
a.push(3);
a = [1, 2, 4];
console.log(z);
console.log(1 === 1);
console.log(1 !== 1);
/***
const a = [1, 2];
const b = [1, 2];
const c = b;
console.log(a === b); // false
console.log(a === c);//false
console.log(b === c);// true = F, 
***/