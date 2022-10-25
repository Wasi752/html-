let c = 300;
const p = 7;
const f = () => {
    const rahim = () => 100;
    const alif = ()=> rahim;
    const w = ()=> alif;
    return w;
}
const x = f();
const z = x();
const q = z();
console.log(q());
Footer
