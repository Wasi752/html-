// 7 Person's Salary Sheet by callback Function

const nam = ["Sirazul Islamn", "Omar Faruk", "Sharif", "Tazuddin", "Wasiur Rahman", "A Malik", "A Rahim"];
const bsalary = [18000, 20000, 25000, 28000, 34000, 40000, 47000];
const n = nam.map((n, e)=> {
        return nam[e];
    });
 
const basic =()=> {
    const b = bsalary.map((s, i) => bsalary[i]);
    return b;
}
const bas = basic();

const increment =()=> {
    const i = bsalary.map((q, i) => bsalary[i] / 100 * 5);
   return i;
}
const inc = increment();

const jeshdhata =(a)=> {
    const j = bas.map((p, u) => (bas[u] + inc[u]) / 100 * 10);
    return j;
}
const jes = jeshdhata(increment);

const mul = (a, b, c)=>{
    const p = bas.map((f, o) => bas[o] + inc[o] + jes[o]);
    return p;
}
const bmul = mul(basic, increment, jeshdhata);

const houseRent = (a)=> {
    const h = bmul.map((g, d) => bmul[d] / 100 * 40);
    return h;
}
const hou = houseRent(mul);

const maharga = (a)=> {
    const m = bmul.map((m, n) => bmul[n] / 100 * 10);
    return m;
}
const mah = maharga(mul);

const subTotal = (a, b, c, d, e) => {
    const total = nam.map((k, v) => bas[v] + inc[v] + jes[v] + hou[v] + mah[v]);
    return total;
}
const sub = subTotal(basic, increment, jeshdhata, houseRent, maharga);
const staffSalary = (a, b, c, d, e, f)=>{
    const x = n.map((y, w) => ` ${w+1} ${n[w]} ${a[w]} ${b[w]} ${c[w]} ${d[w]} ${e[w]} ${f[w]} `);
    return x;
}
console.log(staffSalary(bas, inc, jes, hou, mah, sub));
    