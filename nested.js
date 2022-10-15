const first = () => {
    const x = 10;
    const second = () => {
        const third = () => {
            return 6;
        }
        return 5;
    }
    return second() + x + third();
}
console.log(first());