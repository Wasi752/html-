const basic = (b, y)=> b * y;
const etc = (z) =>{
        const increment = ((z/ 100) * 5);
        const jeshdhata  = (((z + increment) / 100) * 10);
        const mul_salary = z + increment + jeshdhata;
        const house_rent = ((mul_salary / 100) * 40);
        const maharga = ((mul_salary / 100) * 10);
        const total = (mul_salary + house_rent + maharga);  
return total;
}
console.log(etc(basic(34000, 1)));