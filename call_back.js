const etc = ()=>{
        const z = [40000, 34000, 28000, 25000, 20000, 18000, 15000];
        const basic = z
        .map(y => {
            const increment = ((y[0] / 100) * 5);
            const jeshdhata  = (((y[0] + increment) / 100) * 10);
            const mul_salary = y[0] + increment + jeshdhata;
            const house_rent = ((mul_salary / 100) * 40);
            const maharga = ((mul_salary / 100) * 10);
            const total = (mul_salary + house_rent + maharga);
       });
        
    return basic;
}
   console.log(etc()); 
