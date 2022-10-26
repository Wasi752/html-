const staffSalary = ()=>{
const nam = ["Sirazul Islamn", "Omar Faruk", "Sharif", "Tazuddin", "Wasiur Rahman"];
const bsalary = [18000, 20000, 25000, 28000, 34000];
const n = nam.map((n, e)=> {
    return nam[e];
});
const i = bsalary.map((q, i) => bsalary[i] / 100 * 5);
const b = bsalary.map((s, i) => bsalary[i]);
const j = bsalary.map((p, u) => (bsalary[u] + i[u]) / 100 * 10);
const p = b.map((f, o) => b[o] + i[o] + j[o]);
const h = p.map((g, d) => p[d] / 100 * 40);
const m = p.map((m, n) => p[n] / 100 * 10);
const total = nam.map((k, v) => b[v] + i[v] + j[v] + h[v] + m[v]);
const x = n.map((y, w) => ` ${w+1} ${n[w]} ${b[w]} ${i[w]} ${j[w]} ${h[w]} ${m[w]} ${total[w]} `);
return x;
}

const basic =()=> b;
const increment =()=> i;
const jeshdhata =()=> j;
const houseRent = ()=> h;
const maharga = ()=> m;
//const staffSalary = ()=> x;
console.log(staffSalary());

