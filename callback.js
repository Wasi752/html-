const mati = (a) => {
    return a * 2;
}

const ruhama = (f, g) =>{
    return g(60 + g(40));
}

const asman = (f, g) => {
    return ruhama(g, f) + g(50);
}
const arth = (a) => {
    return a + 100;
}
console.log(asman(arth, mati));
console.log(asman (mati, arth));
//console.log(asman((x)=> x * x , mati)); 
// ruhama (mati, ano ) 2755600 + 100 = 


