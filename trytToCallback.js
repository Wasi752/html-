// My Saalry by callback

const basic =(b)=> {
    return b * 34;
}
const increment =(i)=> { 
   return i * 2;
}
const jeshdhata =(a)=> {
    return a + 1785; 
}
const houseRent = (a, b, c)=> {
    return (a(1000) + b(850) + c(1785)) / 100 * 50;
}
const maharga = (a, b, c )=> {
    return houseRent(a, b, c) + c(1785);
}
const basicTotal = (a, b, c)=>{ 
    return maharga(a, b, c ) + b(850);
}
const mySalary = (a, b, c)=>{
    return basicTotal(a, b, c) + a(1000);
}
console.log(mySalary(basic, increment, jeshdhata));


