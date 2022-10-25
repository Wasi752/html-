const basic = ()=> {
    const name = ["Omar Faruk", "Tazuddin", "Wasiur Rahman", "Sirazul Islamn", "Farhan"];
    const b_salary = [20000, 28000, 34000, 18000, 25000];
    const increment = b_salary.map(u => ((u / 100) * 5));
    const jeshdhata  = b_salary.map(l => (l + ((l / 100) * 5)) / 100 * 10);
    const mul_salary = b_salary.map(w => (w + ((w / 100) * 5)) + (w + ((w / 100) * 5)) / 100 * 10);
    const house_rent = b_salary.map(t => (t + ((t / 100) * 5) + ((t + ((t / 100) * 5)) / 100 * 10)) / 100 * 40);
    const maharga = b_salary.map(h => (h + ((h / 100) * 5) + (h + ((h / 100) * 5) / 100 * 10)) / 100 * 10);
    const total = b_salary.map(e => e + (e / 100 * 5) + (e + (e / 100 * 5)) / 100 * 10 + (((e + (e / 100 * 5)) + (e + (e / 100 * 10))) / 100 * 40) + (((e + (e / 100 * 5)) / 100 * 10)));
    
    const everyone = name.map((a, i) => 
        ` ${i + 1} : ${name[i]} ${b_salary[i]} ${increment[i]} ${jeshdhata[i]} ${mul_salary[i]} ${house_rent[i]} ${maharga[i]} ${total[i]}`
    );
return everyone;
} 
console.log(basic());

const c = 20000;
console.log((c + (c / 100 * 5)) / 100 * 10 / 100 * 10);
    