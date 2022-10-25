let c = 300;
const p = 7;
const f = () => {
    const rahim = (b) => 100 + b;
    const alif = ()=> rahim;
    const w = ()=> alif;
    return w;
}
const f = () => ()=> ()=> (b)=> 100 + b;
const x = f();
const z = x(100);
const q = z(60);
const y = f;
console.log(q(40));
console.log(q(20));
