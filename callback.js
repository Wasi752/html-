const mati = (a) => {
    return a * 2;
}
const ruhama = (f, g) =>{
    return f(60 + g(30));
}
const asman = (f, g) => {
    return ruhama(f, g) + g(50);
}
const arth = (a) => {
    return a + 100;
}
console.log(asman(arth, mati)); 
console.log(asman(mati, arth)); 
// 220 + 100, 380 + 150  