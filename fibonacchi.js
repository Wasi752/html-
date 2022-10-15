// 1, 1, 1, 2, 2, 3, 4,  fibonacchi seriz

const fib = (n)=> {
    if(n == 1 || n == 2 || n == 3) {
        return 1;
        }
        const a = fib(n - 2);
        const b = fib(n - 3);
        

        return a + b + c;
}
console.log(fib(3));