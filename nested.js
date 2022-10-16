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
        return six();
    }
    const s = second();
    const d = fourth();
    const f = x + d;
    return s + f;
}
console.log(first());