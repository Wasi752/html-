const first = () => {
    const x = 10;
    const second = () => {
        const third = () => {
            return 6;
        }
        return 5;
    }
    const fourth = () => {
        const six = () =>{
            return 7;
        }
        return six;
    }
    const p = fourth();
    const s = second;
    const d = fourth;
    const f = x + p();
    const seven = ()=>{
        return s() + f;
    }
    const t = seven;
    return t;

}
const ababil = first();
console.log(ababil());
