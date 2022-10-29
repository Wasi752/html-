// My Salary by callback with Anonymus function
/***
const basic =(b)=> {
    return b * 34;
}
const increment =(i)=> { 
   return i * 2;
} ***/
const jeshdhata =(a)=> {
    return a + 1785; 
}
const houseRent = (a, b, c)=> {
    return (a(1000 + b(100)) + b(850) + c(1785)) / 100 * 50;
}
const maharga = (a, b, c )=> {
    return houseRent(a, b, c) + c(1785 + b(500));
}
const basicTotal = (a, b, c)=>{ 
    return maharga(a, b, c ) + b(850);
}
const mySalary = (a, b, c)=>{
    return basicTotal(a, b, c) + a(1000);
}
console.log(mySalary((x)=> x * 34, (g)=> g * 2, jeshdhata));

// 58905, 62305, 63305
