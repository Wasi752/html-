let c = 300;
const p = 7;
const k = ()=>5000;
const f = () => {
    const rahim = (b, g) => 100 + b + g();
    const alif = ()=> rahim;
    const w = ()=> alif;
    return w;
}
const fh = () => ()=> ()=> (b)=> 100 + b;
const x = f();
const z = x();
const q = z();
const y = f;
//console.log(q(40, 30));
console.log(q(20, k));
//console.log(q(10));
