const i = 0;
let counter = 0;
let student = 2800;

const result = (c) => {
    const bukhari = 80;
    const muslim = 70;
    const tirmizi = 85;
    const abuDauod = 75;
    const total = bukhari + muslim + tirmizi + abuDauod;
    return total + c;
}
const rollNumber = (a) => {
    return a() + 100;
}
const registration = (b) => {
    while (student > i) {
        counter = counter + 1
        console.log(counter)
        student = student - 1
    }
    return counter + result(300);
}

console.log(rollNumber(registration));
console.log(registration(rollNumber))
const falcon = result(80 + 90 + 76 + 88 + 70);
console.log(falcon);
console.log(result(registration() + 500));