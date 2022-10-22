let c = 300;
const p = 7;
const f = () => {
    let amanah;
    let umana;
    const rahim = (b) => {
        umana = b;
        return 100 + amanah + umana;
    }
    const alif = (c)=> {
        amanah = c;
        return rahim;
    }
    const w = (b)=> {
        amanah = b;
        return alif;
    }
    return w;
}
const x = f();
const z = x(100);
const q = z(60);
const y = f;
console.log(q(40));

//Anonymous Function
//Braceless Function