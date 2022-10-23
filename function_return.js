let c = 300;
const p = 7;
const f = () => (b)=> (a)=> ()=> a + b;
const x = f();
const z = x(100);
const q = z(60);
const y = f;
console.log(q(20));

//Anonymous Function
//Braceless Function