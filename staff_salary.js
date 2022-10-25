const basic = ()=> {
    const name = ["Omar Faruk", "Tazuddin", "Wasiur Rahman", "Sirazul Islamn", "Farhan"];
    const b_salary = [20000, 28000, 34000, 18000, 25000];
    const increment = b_salary.map(u => ((u / 100) * 5));
    const jeshdhata  = b_salary.map(l => (((l + increment) / 100) * 10));
    const mul_salary = b_salary.map(w => w + increment + jeshdhata);
    const house_rent = b_salary.map(t => ((t + increment + jeshdhata) / 100) * 40);
    const maharga = b_salary.map(h =>((h + increment + jeshdhata) / 100) * 10);
    
    const everyone = name.map((a, i) => 
        ` ${i + 1} : ${name[i]} ${b_salary[i]} ${increment[i]} ${jeshdhata[i]} ${mul_salary[i]} ${house_rent[i]} ${maharga[i]}`
    );
return everyone;
}
console.log(basic());