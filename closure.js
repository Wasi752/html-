const x = () => {
    const y = 300;
    let z = 500 + y;
    return () => {
        z = z + 5 + y;
        return z;
    }
}
const n = x();
console.log(n());
let y = n();
console.log(n());
console.log(y);
console.log(n());
console.log(y);
