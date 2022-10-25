const z = 34000;
const increment = ((z/ 100) * 5);
const jeshdhata  = (((z + increment) / 100) * 10);
const mul_salary = z + increment + jeshdhata;
const house_rent = ((mul_salary / 100) * 40);
const maharga = ((mul_salary / 100) * 10);
const total = (mul_salary + house_rent + maharga);
console.log(total, total * 12);
let x = 1;
    while (x < 13){
        console.log(total * x);
        x++;   
};