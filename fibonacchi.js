// 1, 1, 1, 2, 2, 3, 4, 5, 7, 9,  fibonacchi seriz
// 1, 1, 2, 3, 5, 8, 13, 21
// 1, 1, 1, 3, 5, 9, 17, 31, 57

const fib = (n)=> {
    if(n == 1 || n == 2 || n == 3) {
        return 1;
        }
        const a = fib(n - 1);
        const b = fib(n - 2);
        const c = fib(n - 3);
        

        return a + b + c;
}
console.log(fib(9));